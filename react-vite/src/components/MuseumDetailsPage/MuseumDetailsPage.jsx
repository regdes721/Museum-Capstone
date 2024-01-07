import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { thunkLoadMuseumDetails} from "../../redux/museums";
import OpenModalButton from "../OpenModalButton";
import DeleteMuseumModal from "../DeleteMuseumModal";
import './MuseumDetailsPage.css'

const MuseumDetailsPage = () => {
    const { museumId } = useParams();
    const dispatch = useDispatch();
    const museumDetailsObj = useSelector(state => state.museums.singleMuseum);
    const museum = Object.values(museumDetailsObj)
    const sessionUser = useSelector((state) => state.session.user);

    const organizerButtonClassName = (!sessionUser || museum.length !== 1 || museum.length === 1 && sessionUser.id !== museum[0].owner_id) ? "hidden" : null

    useEffect(() => {
        dispatch(thunkLoadMuseumDetails(museumId))
    }, [dispatch, museumId])

    return (
        <div className="museum-details-container">
            <div>
                {museum.length === 1 ? <img src={museum[0].image_url} className="museum-details-img" /> : null}
                <div className="museum-details-main-container">
                    <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to="/museums"><span>Museums</span></NavLink> {museum.length === 1 ? <span>{museum[0].name}</span> : null }</p>
                    {museum.length === 1 ? <h1>{museum[0].name}</h1>: null}
                    <div className="museum-details-columns-container">
                        {museum.length === 1 ? <p>{museum[0].description}</p> : null}
                        <div className="museum-details-column-right museum-details-buttons-right">
                            <div className={`${organizerButtonClassName} museum-details-buttons-right`}>
                                {museum.length === 1 ? <NavLink to={`/museums/${museum[0].id}/edit`}><button>Update Museum</button></NavLink> : null}
                                <OpenModalButton
                                    buttonText="Delete Museum"
                                    modalComponent={<DeleteMuseumModal />}
                                />
                            </div>
                            <button className="museum-details-products-button"><p>See all products</p> <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {museum.length === 1 ?
            <div>
                <h2>Find us at the shop</h2>
                <div className="museum-details-shopcard-container">
                    <p>{museum[0].store_name}</p>
                    <p>{museum[0].store_address}</p>
                    {museum[0].phone_number && <p>Phone: {museum[0].phone_number}</p>}
                    {museum[0].email && <p>{museum[0].email}</p>}
                    <NavLink to={museum[0].museum_website} target="_blank"><button>VISIT THE MUSEUM WEBSITE</button></NavLink>
                </div>
            </div> : null}
        </div>
    )
}

export default MuseumDetailsPage;
