import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { thunkLoadMuseumDetails} from "../../redux/museums";
import OpenModalButton from "../OpenModalButton";
import DeleteMuseumModal from "../DeleteMuseumModal";
import MapContainer from "../Maps";
import './MuseumDetailsPage.css'

const MuseumDetailsPage = () => {
    const { museumId } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const museumDetailsObj = useSelector(state => state.museums.singleMuseum);
    const museum = Object.values(museumDetailsObj)
    let museumProducts;
    let sortedProducts;
    let bestSellers;
    let sortedBestSellers;
    if (museumDetailsObj[museumId]) {
        museumProducts = museumDetailsObj[museumId].products
    }
    if (museumProducts) {
        sortedProducts = museumProducts.sort((a, b) => b.num_sold - a.num_sold)
    }
    if (sortedProducts) {
        bestSellers = [sortedProducts[0], sortedProducts[1], sortedProducts[2], sortedProducts[3]]
    }
    if (bestSellers) {
        sortedBestSellers = bestSellers.filter((product) => product !== undefined)
    }
    const sessionUser = useSelector((state) => state.session.user);

    const organizerButtonClassName = (!sessionUser || museum.length !== 1 || museum.length === 1 && sessionUser.id !== museum[0].owner_id) ? "hidden" : null

    useEffect(() => {
        dispatch(thunkLoadMuseumDetails(museumId))
    }, [dispatch, museumId])

    useEffect(() => {
        if (museum.length > 0) {
            setTimeout(() => {setLoading(false)}, 500)
        }
    }, [museum])

    return (
        loading ?
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
        :
        <div className="museum-details-container">
            <div>
                {museum.length === 1 ? <img src={museum[0].image_url} className="museum-details-img" /> : null}
                <div className="museum-details-main-container">
                    <p><NavLink to="/" className='no-underline font-text'><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to="/museums" className='no-underline font-text'><span>Museums</span></NavLink> {museum.length === 1 ? <span className='font-text'>{museum[0].name}</span> : null }</p>
                    {museum.length === 1 ? <h1 className="font-header all-museums-header-title">{museum[0].name}</h1>: null}
                    <div className="museum-details-columns-container">
                        {museum.length === 1 ? <p className="font-text museum-details-column-left">{museum[0].description}</p> : null}
                        <div className="museum-details-column-right museum-details-buttons-right">
                            <div className={`${organizerButtonClassName} museum-details-buttons-right`}>
                                {museum.length === 1 ? <NavLink to={`/museums/${museum[0].id}/edit`}><button className="nav-left-button">UPDATE MUSEUM</button></NavLink> : null}
                                <OpenModalButton
                                    buttonText="DELETE MUSEUM"
                                    modalComponent={<DeleteMuseumModal />}
                                />
                            </div>
                            {museum.length === 1 && sortedBestSellers && sortedBestSellers.length > 0 ? <NavLink to={`/museums/${museum[0].id}/products`}><button className="museum-details-products-button"><p>See all products</p> <i className="fa-solid fa-arrow-right"></i></button></NavLink> : null}
                        </div>
                    </div>
                </div>
            </div>
            {museum.length === 1 && sortedBestSellers && sortedBestSellers.length > 0 ?
            <div className="font-text">
                <h2>Best Sellers {museum[0].name}</h2>
                <div className="best-sellers-preview-grid">
                    {sortedBestSellers.map((product) =>
                    <NavLink to={`/products/${product.id}/details`} className='no-underline'><div className="best-sellers-preview-container">
                        <img src={product?.product_images[0].image_url} className="best-sellers-preview-img" />
                        <div className="best-sellers-preview-name">
                            <h3>{product?.name}</h3>
                        </div>
                        <p>€{product?.price.toFixed(2)}</p>
                    </div></NavLink>
                    )}
                </div>
                <NavLink to={`/museums/${museum[0].id}/best-sellers`}><button className="best-sellers-button">BEST SELLERS</button></NavLink>
            </div>
        : null}
            {museum.length === 1 ?
            <div className="font-text">
                <h2>Find us at the shop</h2>
                <div className="museum-details-shopcard-container">
                    <MapContainer className="map" />
                    <div>
                        <p>{museum[0].store_name}</p>
                        <p>{museum[0].store_address}</p>
                        {museum[0].phone_number && <p>Phone: {museum[0].phone_number}</p>}
                        {museum[0].email && <p>{museum[0].email}</p>}
                        <NavLink to={museum[0].museum_website} target="_blank"><button className="nav-left-button">VISIT THE MUSEUM WEBSITE</button></NavLink>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default MuseumDetailsPage;
