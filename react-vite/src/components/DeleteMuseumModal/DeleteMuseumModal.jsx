import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModal } from '../../context/Modal';
import { thunkDeleteMuseum } from '../../redux/museums';
import './DeleteMuseumModal.css'

function DeleteMuseumModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const museumDetailsObj = useSelector(state => state.museums.singleMuseum);
    const museum = Object.values(museumDetailsObj);
    let museumId;
    if (museum && museum[0]) museumId = museum[0].id
    const [errors, setErrors] = useState("");
    const { closeModal } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteMuseum({museumId})).then(() => {
            navigate(`/museums`)
        }).then(closeModal).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors.message === "Museum couldn't be found") {
                setErrors(data.errors.message)
                // console.log(data.errors)
            }
        })
    }

    // if (message === "Successfully deleted") return <Navigate to={`/groups`} replace={true} />

    return (
        <div className='login-container'>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this museum?</p>
            <div className='delete-museum-button-container'>
                <button onClick={handleSubmit} className='delete-museum-yes-button'>{`Yes (Delete Museum)`}</button>
                <button onClick={closeModal} className='delete-museum-no-button'>{`No (Keep Museum)`}</button>
            </div>
            {errors && <p>{errors}</p>}
        </div>
    )
}

export default DeleteMuseumModal;
