import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { thunkUpdateMuseum, uploadImage } from '../../redux/museums'

export default function UpdateMuseumPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { museumId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const museumObj = useSelector((state) => state.museums.singleMuseum)
    const museum = Object.values(museumObj)
    const [name, setName] = useState(museum && museum[0] && museum[0].name ? museum[0].name : '')
    const [description, setDescription] = useState(museum && museum[0] && museum[0].description ? museum[0].description : '')
    const [image, setImage] = useState(museum && museum[0] && museum[0].image_url ? museum[0].image_url : '')
    const [store_name, setStoreName] = useState(museum && museum[0] && museum[0].store_name ? museum[0].store_name : '')
    const [store_address, setStoreAddress] = useState(museum && museum[0] && museum[0].store_address ? museum[0].store_address : '')
    const [phone_number, setPhoneNumber] = useState(museum && museum[0] && museum[0].phone_number ? museum[0].phone_number : null)
    const [email, setEmail] = useState(museum && museum[0] && museum[0].email ? museum[0].email : null)
    const [museum_website, setMuseumWebsite] = useState(museum && museum[0] && museum[0].museum_website ? museum[0].museum_website : '')
    const [errors, setErrors] = useState('')

    console.log(image)

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
          if (image && image !== museum[0].image_url) {
            const formData = new FormData();
            formData.append("image", image);
            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            returnImage = await dispatch(uploadImage(formData));
          }
        const form = {
            museumId,
            name,
            description,
            store_name,
            store_address,
            phone_number,
            email,
            museum_website
        }
        if (returnImage) form.image_url = returnImage.url
        else form.image_url = image
        const handleMuseumUpdate = async (museum) => {
            const museumData = await dispatch(thunkUpdateMuseum(museum))
            if (!museumData.errors) {
                navigate(`/museums/${museumData.id}`)
            } else {
                console.log("still a form?", form)
                setErrors(museumData.errors)
            }
        }
        handleMuseumUpdate(form)
    }

    if (!sessionUser) return null

    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" className='create-museum-container'>
            <div>
                <h1>{`What's the name of your museum?`}</h1>
                <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder="Ex: Museum of Modern Art " className='create-museum-input' />
                <p className='red'>{errors.name}</p>
            </div>
            <div>
                <h1>Describe your museum</h1>
                <textarea rows="13" cols="70" type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder="Ex: MoMA is a place that fuels creativity, ignites minds, and provides inspiration with its extraordinary exhibitions and collection of modern and contemporary art." />
                <p className='red'>{errors.description}</p>
            </div>
            <div>
                <h1>Upload an image for your museum</h1>
                {/* <input type='text' value={image_url} onChange={e => setImage(e.target.value)} className='create-museum-input' /> */}
                <input type="file" className='server-creation-file-upload' accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                <p className='red'>{errors.image_url}</p>
            </div>
            <div>
                <h1>{`What is the name of your museum's store/gift shop?`}</h1>
                <input type='text' value={store_name} onChange={e => setStoreName(e.target.value)} placeholder="Ex: MoMA Design Store" className='create-museum-input' />
                <p className='red'>{errors.store_name}</p>
            </div>
            <div>
                <h1>{`What is the address of your museum's store/gift shop?`}</h1>
                <input type='text' value={store_address} onChange={e => setStoreAddress(e.target.value)} placeholder="Ex: 11 West 53 Street, Manhattan, NY 10019" className='create-museum-input' />
                <p className='red'>{errors.store_address}</p>
            </div>
            <div>
                <h1>{`Add a phone number for your museum's store/gift shop. (optional)`}</h1>
                <input type='text' value={phone_number} onChange={e => setPhoneNumber(e.target.value)} className='create-museum-input' />
                <p className='red'>{errors.phone_number}</p>
            </div>
            <div>
                <h1>{`Add an email address for your museum's store/gift shop. (optional)`}</h1>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='create-museum-input' />
                <p className='red'>{errors.email}</p>
            </div>
            <div>
                <h1>{`What is your museum's website?`}</h1>
                <input type='text' value={museum_website} onChange={e => setMuseumWebsite(e.target.value)} placeholder="Ex: https://www.moma.org/" className='create-museum-input' />
                <p className='red'>{errors.museum_website}</p>
            </div>
            <input type='submit' value="Create New Museum" className='create-museum-submit-button'/>
            {!sessionUser && (
                <Navigate to="/" replace={true} />
            )}
        </form>
    )
}
