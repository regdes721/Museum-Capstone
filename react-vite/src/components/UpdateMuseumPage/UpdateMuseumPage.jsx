import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { thunkUpdateMuseum, thunkLoadMuseumDetails, uploadImage } from '../../redux/museums'

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

    const onSubmit = async (e) => {
        e.preventDefault()
        let errorsTemp = {}
        setErrors({})
        const phoneNumberRegex = /^[0-9]*$/
        if (phone_number && phone_number.split(" ").join("").length !== 10 || phone_number && !phoneNumberRegex.test(phone_number.split(" ").join(""))) {
            errorsTemp = {
                ...errorsTemp,
                phone_number: "Phone Number must be exactly 10 digits"
            }
        }
        if (name.length > 100) {
            errorsTemp = {
                ...errorsTemp,
                name: "Museum name cannot be more than 100 characters"
            }
        }
        setErrors(errorsTemp)
        if (Object.keys(errorsTemp).length) return
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
                setErrors(museumData.errors)
            }
        }
        handleMuseumUpdate(form)
    }

    useEffect(() => {
        const getMuseum = async () => {
            const museum = await dispatch(thunkLoadMuseumDetails(museumId))
            setName(museum.name)
            setDescription(museum.description)
            setImage(museum.image_url)
            setStoreName(museum.store_name)
            setStoreAddress(museum.store_address)
            setPhoneNumber(museum.phone_number)
            setEmail(museum.email)
            setMuseumWebsite(museum.museum_website)
        }
        getMuseum()
    }, [dispatch])

    useEffect(() => {
        if (!sessionUser) { navigate("/") }
    }, [sessionUser, navigate]);

    if (!sessionUser) return null

    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" className='create-museum-container'>
<h1 className="font-header all-museums-header-title">Update Museum</h1>
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
