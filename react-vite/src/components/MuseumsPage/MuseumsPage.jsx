import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkLoadMuseums } from "../../redux/museums";

const MuseumsPage = () => {
    const dispatch = useDispatch();
    const museumsObj = useSelector(state => state.museums.allMuseums);
    const museums = Object.values(museumsObj)

    useEffect(() => {
        dispatch(thunkLoadMuseums())
    }, [dispatch])

    return (
        <div>
            <div>
                <NavLink to="/"><p>Home</p></NavLink>
                <h1>Museums</h1>
                <h3>Discover the selection of books and products from the most famous Museums.</h3>
            </div>
            {museums.map((museum) => (
                <div>
                    <img src={museum.image_url} />
                    <h2>{museum.name}</h2>
                </div>

            ))}
        </div>
    )
}

export default MuseumsPage;
