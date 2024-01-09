import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModal } from '../../context/Modal';
import { thunkDeleteProduct } from '../../redux/products';

function DeleteProductModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productDetailsObj = useSelector(state => state.products.singleProduct);
    const product = Object.values(productDetailsObj);
    let productId;
    if (product && product[0]) productId = product[0].id
    const [errors, setErrors] = useState("");
    const { closeModal } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteProduct({productId})).then(() => {
            navigate(`/`)
        }).then(closeModal).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors.message === "Product couldn't be found") {
                setErrors(data.errors.message)
                // console.log(data.errors)
            }
        })
    }

    // if (message === "Successfully deleted") return <Navigate to={`/groups`} replace={true} />

    return (
        <div className='login-container'>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this product?</p>
            <div className='delete-museum-button-container'>
                <button onClick={handleSubmit} className='delete-museum-yes-button'>{`Yes (Delete Product)`}</button>
                <button onClick={closeModal} className='delete-museum-no-button'>{`No (Keep Product)`}</button>
            </div>
            {errors && <p>{errors}</p>}
        </div>
    )
}

export default DeleteProductModal;
