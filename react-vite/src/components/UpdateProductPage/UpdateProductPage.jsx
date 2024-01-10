import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { thunkLoadMuseums, uploadImage } from "../../redux/museums";
import { thunkUpdateProduct, thunkLoadProductDetails } from "../../redux/products";

export default function UpdateProductPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { productId } = useParams();
    const productObj = useSelector(state => state.products.singleProduct)
    const product = Object.values(productObj)
    const [museum_id, setMuseumId] = useState(product && product[0] && product[0].museum_id ? product[0].museum_id : "")
    const [name, setName] = useState(product && product[0] && product[0].name ? product[0].name : "");
    const [description, setDescription] = useState(product && product[0] && product[0].description ? product[0].description : "");
    const [price, setPrice] = useState(product && product[0] && product[0].price ? product[0].price : "");
    const [category, setCategory] = useState(product && product[0] && product[0].category ? product[0].category : "");
    const [dimensions, setDimensions] = useState(product && product[0] && product[0].dimensions ? product[0].dimensions : "");
    const [quantity, setQuantity] = useState(product && product[0] && product[0].quantity ? product[0].quantity : "");
    const [image, setImage] = useState(product && product[0] && product[0].product_images ? product[0].product_images[0].image_url : "");
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
        const priceRegex = /^\d{1,7}(\.\d{1,2})?$/;
        if (price && !priceRegex.test(price)) {
            setErrors({ price: "Price is invalid" })
            return
        }
        let returnImage
        if (image && image !== product[0].product_images[0].image_url) {
          const formData = new FormData();
          formData.append("image", image);
          // aws uploads can be a bit slow—displaying
          // some sort of loading message is a good idea
          returnImage = await dispatch(uploadImage(formData));
        }
        const form = {
            productId,
            museum_id,
            name,
            description,
            price,
            category,
            dimensions,
            quantity,
        }
        if (returnImage) form.image_url = returnImage.url
        if (!returnImage) form.image_url = image
        console.log("form image", form.image_url)
        const handleProductUpdate = async (product) => {
            const productData = await dispatch(thunkUpdateProduct(product))
            if (!productData.errors) {

                navigate(`/products/${productData.id}/details`)
            }
            setErrors(productData.errors)
        }
        handleProductUpdate(form)
    }

    useEffect(() => {
        dispatch(thunkLoadMuseums())
        dispatch(thunkLoadProductDetails(productId))
    }, [dispatch, productId])

    useEffect(() => {
        if (!sessionUser) { navigate("/") }
    }, [sessionUser, navigate]);

    if (userMuseums.length === 0) return (
        <NavLink to="/museums/new"><h1>Click here to create a museum</h1></NavLink>
    )

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Hi From Edit Product</h1>
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
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option value="" disabled>{`(Select one)`}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
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
