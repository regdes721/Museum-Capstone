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
                <p><span>Home</span> <span>Museums</span> {museum.length === 1 ? <span>{museum[0].name}</span> : null }</p>
                {museum.length === 1 ? <h1>{museum[0].name}</h1>: null}
                {museum.length === 1 ? <p>{museum[0].description}</p> : null}
                <button>See all products</button>
            </div>
        </div>
    )
}

export default MuseumDetailsPage;
