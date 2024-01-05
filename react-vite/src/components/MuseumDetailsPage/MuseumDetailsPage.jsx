import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { thunkLoadMuseumDetails} from "../../redux/museums";

const MuseumDetailsPage = () => {
    const { museumId } = useParams();
    const dispatch = useDispatch();
    const museumDetailsObj = useSelector(state => state.museums.singleMuseum);
    const museum = Object.values(museumDetailsObj)
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(thunkLoadMuseumDetails(museumId))
    }, [dispatch, museumId])

    return (
        <div>
            <div>
                {museum.length === 1 ? <img src={museum[0].image_url} /> : null}
                <p><NavLink to="/"><span>Home</span></NavLink> <NavLink to="/museums"><span>Museums</span></NavLink> {museum.length === 1 ? <span>{museum[0].name}</span> : null }</p>
                {museum.length === 1 ? <h1>{museum[0].name}</h1>: null}
                {museum.length === 1 ? <p>{museum[0].description}</p> : null}
                <button>See all products</button>
            </div>
            {museum.length === 1 ?
            <div>
                <h2>Find us at the shop</h2>
                <div>
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
