import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom'
import { thunkLoadMuseums, uploadImage } from "../../redux/museums";
import { thunkCreateProduct } from "../../redux/products";

export default function CreateProductPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [museum_id, setMuseumId] = useState("")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({});
    const sessionUser = useSelector(state => state.session.user)
    const museumsObj = useSelector(state => state.museums.allMuseums);
    const museums = Object.values(museumsObj)
    let userMuseums
    if (museums) {
        userMuseums = museums.filter((museum) => museum.owner_id === sessionUser.id)
    }
    console.log(errors)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        let returnImage
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
          // aws uploads can be a bit slow—displaying
          // some sort of loading message is a good idea
          returnImage = await dispatch(uploadImage(formData));
        }
        const form = {
            museum_id,
            name,
            description,
            price,
            category,
            dimensions,
            quantity,
        }
        if (returnImage) form.image_url = returnImage.url
        const handleProductCreation = async (product) => {
            const productData = await dispatch(thunkCreateProduct(product))
            if (!productData.errors) {
                navigate(`/products/${productData.id}/details`)
            }
            setErrors(productData.errors)
        }
        handleProductCreation(form)
    }

    useEffect(() => {
        dispatch(thunkLoadMuseums())
    }, [dispatch])

    useEffect(() => {
        if (!sessionUser) { navigate("/") }
    }, [sessionUser, navigate]);

    if (userMuseums.length === 0) return (
        <NavLink to="/museums/new"><h1>Click here to create a museum</h1></NavLink>
    )

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Hi From Create Product</h1>
            <div>
                <label>
                    Museum
                </label>
                <select value={museum_id} onChange={(e) => setMuseumId(e.target.value)}>
                    <option value="" disabled>{`(Select one)`}</option>
                    {userMuseums.map((museum) => (
                        <option value={museum.id}>{museum.name}</option>
                    ))}
                </select>
                {errors.museum_id && <p className="red">{errors.museum_id}</p>}
            </div>
            <div>
                <label>
                    Product Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {errors.name && <p className="red">{errors.name}</p>}
            </div>
            <div>
                <label>
                    Product Description
                </label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {errors.description && <p className="red">{errors.description}</p>}
            </div>
            <div>
                <label>
                    Product Price
                </label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                {errors.price && <p className="red">{errors.price}</p>}
            </div>
            <div>
                <label>
                    Product Category
                </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled>{`(Select one)`}</option>
                    <option value="Posters & stationery">Posters & stationery</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Decoration">Decoration</option>
                    <option value="Books">Books</option>
                    <option value="Kids">Kids</option>
                    <option value="Fashion & Accessories">Fashion & Accessories</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Engravings">Engravings</option>
                    <option value="Sculpture">Sculpture</option>
                    <option value="Print on demand">Print on demand</option>
                </select>
                {errors.category && <p className="red">{errors.category}</p>}
            </div>
            <div>
                <label>
                    Product Dimensions
                </label>
                <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    required
                />
                {errors.dimensions && <p className="red">{errors.dimensions}</p>}
            </div>
            <div>
                <label>
                    Product Quantity
                </label>
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                {errors.quantity && <p className="red">{errors.quantity}</p>}
            </div>
            <div>
                <label>
                    Product Preview Image
                </label>
                <input
                    type="file" className='server-creation-file-upload'accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])} />
                {errors.image_url && <p className="red">{errors.image_url}</p>}
            </div>
            <button type="submit" className="signup-button">SAVE</button>
        </form>
    )
}
