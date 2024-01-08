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
        <div>
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to="/museums"><span>Museums</span></NavLink> {museum.length === 1 ? <NavLink to={`/museums/${museum[0].id}`}><span>{museum[0].name}</span></NavLink> : null }</p>
                {museum.length === 1 ? <h1>{museum[0].name} Products</h1> : null}
            </div>
            {museumProducts && museumProducts.length > 0 && museumProducts.map((product) =>
                <div>
                    <img src={product?.product_images[0].image_url} />
                    <h3>{product?.name}</h3>
                    <p>€{product?.price}</p>
                </div>
                )}
        </div>
    )
}
