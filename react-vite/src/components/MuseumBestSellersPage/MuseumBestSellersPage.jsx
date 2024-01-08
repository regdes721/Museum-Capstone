import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkLoadMuseumDetails} from "../../redux/museums";

export default function MuseumBestSellersPage() {
    const { museumId } = useParams()
    const dispatch = useDispatch()
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
        bestSellers = [sortedProducts[0], sortedProducts[1], sortedProducts[2], sortedProducts[3], sortedProducts[4], sortedProducts[5], sortedProducts[6], sortedProducts[7], sortedProducts[8], sortedProducts[9], sortedProducts[10], sortedProducts[11], sortedProducts[12], sortedProducts[13], sortedProducts[14], sortedProducts[15], sortedProducts[16], sortedProducts[17], sortedProducts[18], sortedProducts[19]]
    }
    if (bestSellers) {
        sortedBestSellers = bestSellers.filter((product) => product !== undefined)
    }

    useEffect(() => {
        dispatch(thunkLoadMuseumDetails(museumId))
    }, [dispatch, museumId])

    return (
        <div>
            <div>
                <p><NavLink to="/"><span> <i className="fa-solid fa-angle-left"></i> Home</span></NavLink> <NavLink to="/museums"><span>Museums</span></NavLink> {museum.length === 1 ? <NavLink to={`/museums/${museum[0].id}`}><span>{museum[0].name}</span></NavLink> : null }</p>
                <h1>Best Sellers</h1>
            </div>
            {sortedBestSellers && sortedBestSellers.length > 0 && sortedBestSellers.map((product) =>
                <div>
                    <img src={product?.product_images[0].image_url} />
                    <h3>{product?.name}</h3>
                    <p>€{product?.price}</p>
                </div>
                )}
        </div>
    )
}
