import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkLoadMuseums } from "../../redux/museums";
import "./MuseumsPage.css"

const MuseumsPage = () => {
    const dispatch = useDispatch();
    const museumsObj = useSelector(state => state.museums.allMuseums);
    const museums = Object.values(museumsObj)

    useEffect(() => {
        dispatch(thunkLoadMuseums())
    }, [dispatch])

    return (
        <div className="all-museums-container">
            <div className="all-museums-header">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Home</p></NavLink>
                <h1 className="font-header all-museums-header-title">Museums</h1>
                <h3 className="font-text all-museums-header-text">Discover the selection of books and products from the most famous Museums.</h3>
            </div>
            <div className="all-museums-grid-container font-text">
                {museums.map((museum) => (
                    <NavLink to={`/museums/${museum.id}`} className='no-underline'>
                        <div className="all-museums-spot-container">
                            <img src={museum.image_url} />
                            <h2>{museum.name} <i className="fa-solid fa-arrow-right"></i></h2>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default MuseumsPage;
