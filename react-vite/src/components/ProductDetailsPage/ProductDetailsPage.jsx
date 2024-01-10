import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import { thunkLoadProductDetails } from "../../redux/products"
import DeleteProductModal from "../DeleteProductModal"

export default function ProductDetailsPage() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const productDetailsObj = useSelector(state => state.products.singleProduct);
    const product = Object.values(productDetailsObj)
    let category;
    if (product.length > 0 && product[0].category === "Kids") {
        category = "kids"
    }
    if (product.length > 0 && product[0].category === "Sculpture") {
        category = "sculpture"
    }
    if (product.length > 0 && product[0].category === "Fashion & Accessories") {
        category = "fashion-accessories"
    }
    if (product.length > 0 && product[0].category === "Jewellery") {
        category = "jewellery"
    }
    if (product.length > 0 && product[0].category === "Books") {
        category = "books"
    }
    if (product.length > 0 && product[0].category === "Decoration") {
        category = "decoration"
    }
    if (product.length > 0 && product[0].category === "Posters & stationery") {
        category = "posters-stationery"
    }
    if (product.length > 0 && product[0].category === "Beauty") {
        category = "beauty"
    }
    if (product.length > 0 && product[0].category === "Engravings") {
        category = "engravings"
    }
    if (product.length > 0 && product[0].category === "Print on demand") {
        category = "print-on-demand"
    }
    
    console.log(product)

    useEffect(() => {
        dispatch(thunkLoadProductDetails(productId))
    }, [dispatch, productId])

    return (
        <div>
            {!product || product.length === 0 ?
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink></p>
                <h1>No Product Available</h1>
            </div>
            :
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to={`/products/${category}`}><span>{product[0].category}</span></NavLink></p>
            </div>}
            {product.length > 0 ?
                 <div>
                    {/* <div>
                        {product[0]?.product_images.map((image) =>
                            <img src={image.image_url} />
                        )}
                    </div> */}
                    <div>
                        <img src={product[0]?.product_images[0].image_url} />
                    </div>
                    <div>
                        <h2>{product[0]?.name}</h2>
                        <p>{product[0]?.description}</p>
                        <p>€{product[0]?.price}</p>
                        <button>ADD TO CART</button>
                        {sessionUser && sessionUser.id === product[0].museum.owner_id &&
                        <div>
                            <NavLink to={`/products/${product[0].id}/edit`}><button>Update Product</button></NavLink>
                            <OpenModalButton
                            buttonText="Delete Product"
                            modalComponent={<DeleteProductModal />}
                        />
                        </div>
                        }
                        <button>Wishlist</button>
                    </div>
                    <div>
                        <h3>Characteristics</h3>
                        <div>
                            <p>Dimensions: {product[0].dimensions}</p>
                        </div>
                        <div>
                            <p>Museum: {product[0].museum.name}</p>
                        </div>
                    </div>
                </div>
                : null
            }
            <div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Delivery</h3>
                    <p>Shipping in 1-2 business days according to the method of delivery chosen</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Satisfied?</h3>
                    <p>14 days to change your mind</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Secure payment</h3>
                    <p>Secure payment solution by Banque Postale</p>
                </div>
                <div>
                    <h3><i className="fa-solid fa-check"></i> Contact us</h3>
                    <p>Our team is available for any questions or requests.</p>
                </div>
            </div>
        </div>
    )
}
