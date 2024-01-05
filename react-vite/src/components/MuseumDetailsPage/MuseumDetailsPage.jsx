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
        <div>
            <div>
                {museum.length === 1 ? <img src={museum[0].image_url} /> : null}
                <p><span>Home</span> <span>Museums</span> {museum.length === 1 ? <span>{museum[0].name}</span> : null }</p>
                {museum.length === 1 ? <h1>{museum[0].name}</h1>: null}
                {museum.length === 1 ? <p>{museum[0].description}</p> : null}
                <div className={organizerButtonClassName}>
                    <OpenModalButton
                        buttonText="Delete Museum"
                        modalComponent={<DeleteMuseumModal />}
                    />
                </div>
                <button>See all products</button>
            </div>
        </div>
    )
}

export default MuseumDetailsPage;
