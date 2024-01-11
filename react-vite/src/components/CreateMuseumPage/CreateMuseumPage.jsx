import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { thunkCreateMuseum, uploadImage } from '../../redux/museums'
import "./CreateMuseumPage.css"

export default function CreateMuseumPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const sessionUser = useSelector(state => state.session.user)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [store_name, setStoreName] = useState('')
    const [store_address, setStoreAddress] = useState('')
    const [phone_number, setPhoneNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [museum_website, setMuseumWebsite] = useState('')
    const [errors, setErrors] = useState('')

    useEffect(() => {
        if (!sessionUser) { navigate("/") }
    }, [sessionUser, navigate]);

    const onSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        const phoneNumberRegex = /^[0-9]*$/
        if (phone_number && phone_number.split(" ").join("").length !== 10 || phone_number && !phoneNumberRegex.test(phone_number.split(" ").join(""))) {
            return setErrors({
                phone_number: "Phone Number must be exactly 10 digits"
            }, 401)
          }
          let returnImage
          if (image) {
            const formData = new FormData();
            formData.append("image", image);
            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            returnImage = await dispatch(uploadImage(formData));
          }
        const form = {
            name,
            description,
            owner_id: sessionUser.id,
            store_name,
            store_address,
            phone_number,
            email,
            museum_website
        }
        if (returnImage) form.image_url = returnImage.url
        const handleMuseumCreation = async (museum) => {
            const museumData = await dispatch(thunkCreateMuseum(museum))
            if (!museumData.errors) {
                navigate(`/museums/${museumData.id}`)
            }
            setErrors(museumData.errors)
        }
        handleMuseumCreation(form)
    }

    if (!sessionUser) return null

    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" className='create-museum-container'>
            <h1 className="font-header all-museums-header-title">Create a Museum</h1>
            <div>
                <h2 className='font-text'>{`What's the name of your museum?`}</h2>
                <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder="Ex: Museum of Modern Art " className='create-museum-input' />
                <p className='red'>{errors.name}</p>
            </div>
            <div>
                <h2 className='font-text'>Describe your museum</h2>
                <textarea rows="13" cols="70" type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder="Ex: MoMA is a place that fuels creativity, ignites minds, and provides inspiration with its extraordinary exhibitions and collection of modern and contemporary art." />
                <p className='red'>{errors.description}</p>
            </div>
            <div>
                <h2 className='font-text'>Upload an image for your museum</h2>
                {/* <input type='text' value={image_url} onChange={e => setImage(e.target.value)} className='create-museum-input' /> */}
                <input type="file" className='server-creation-file-upload' accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                <p className='red'>{errors.image_url}</p>
            </div>
            <div>
                <h2 className='font-text'>{`What is the name of your museum's store/gift shop?`}</h2>
                <input type='text' value={store_name} onChange={e => setStoreName(e.target.value)} placeholder="Ex: MoMA Design Store" className='create-museum-input' />
                <p className='red'>{errors.store_name}</p>
            </div>
            <div>
                <h2 className='font-text'>{`What is the address of your museum's store/gift shop?`}</h2>
                <input type='text' value={store_address} onChange={e => setStoreAddress(e.target.value)} placeholder="Ex: 11 West 53 Street, Manhattan, NY 10019" className='create-museum-input' />
                <p className='red'>{errors.store_address}</p>
            </div>
            <div>
                <h2 className='font-text'>{`Add a phone number for your museum's store/gift shop. (optional)`}</h2>
                <input type='text' value={phone_number} onChange={e => setPhoneNumber(e.target.value)} className='create-museum-input' />
                <p className='red'>{errors.phone_number}</p>
            </div>
            <div>
                <h2 className='font-text'>{`Add an email address for your museum's store/gift shop. (optional)`}</h2>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='create-museum-input' />
                <p className='red'>{errors.email}</p>
            </div>
            <div>
                <h2 className='font-text'>{`What is your museum's website?`}</h2>
                <input type='text' value={museum_website} onChange={e => setMuseumWebsite(e.target.value)} placeholder="Ex: https://www.moma.org/" className='create-museum-input' />
                <p className='red'>{errors.museum_website}</p>
            </div>
            <input type='submit' value="SAVE" className='create-museum-submit-button'/>
            {!sessionUser && (
                <Navigate to="/" replace={true} />
            )}
        </form>
    )
}
