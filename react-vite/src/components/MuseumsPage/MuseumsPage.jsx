import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            <h1>Hello from Museums</h1>
        </div>
    )
}

export default MuseumsPage;
