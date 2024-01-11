import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadMuseumDetails} from "../../redux/museums";

export default function MuseumProductsPage() {
    const { museumId } = useParams()
    const dispatch = useDispatch()
    const museumDetailsObj = useSelector(state => state.museums.singleMuseum);
    const museum = Object.values(museumDetailsObj)
    let museumProducts;
    if (museumDetailsObj[museumId]) {
        museumProducts = museumDetailsObj[museumId].products
    }

    useEffect(() => {
        dispatch(thunkLoadMuseumDetails(museumId))
    }, [dispatch, museumId])

    return (
        <div className="all-museums-container">
            <div className="museums-best-sellers-header">
                <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to="/museums" className='no-underline font-text'><span>Museums</span></NavLink> {museum.length === 1 ? <NavLink to={`/museums/${museum[0].id}`} className='no-underline font-text'><span>{museum[0].name}</span></NavLink> : null }</p>
                {museum.length === 1 ? <h1 className="font-header all-museums-header-title">{museum[0].name} Products</h1> : null}
            </div>
            <div className="best-sellers-preview-grid font-text">
                {museumProducts && museumProducts.length > 0 && museumProducts.map((product) =>
                    <NavLink to={`/products/${product.id}/details`} className='no-underline'><div className="best-sellers-preview-container">
                        <img src={product?.product_images[0].image_url} className="best-sellers-preview-img" />
                        <div className="best-sellers-preview-name">
                            <h3>{product?.name}</h3>
                        </div>
                        <p>€{product?.price.toFixed(2)}</p>
                    </div></NavLink>
                    )}
            </div>
            <div className="product-guarantees-infocard-container font-text">
                <div className="product-guarantees-infocard-details">
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
