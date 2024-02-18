import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../redux/session';
import './AccountPage.css'

export default function AccountPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const sessionUser = useSelector(state => state.session.user);
    const [accountDetailsTab, setAccountDetailsTab] = useState(1)

    const logout = () => {
        dispatch(sessionActions.thunkLogout());
        navigate("/")
        closeMenu();
      };

    if (sessionUser) return (
        <div className="all-museums-container">
            <div className="cart-header">
                <NavLink to="/" className='no-underline font-text'><p className="all-museums-header-p"><i className="fa-solid fa-angle-left"></i> Home</p></NavLink>
                <h1 className="font-header all-museums-header-title">Welcome</h1>
            </div>
            <div className="account-details-container">
                <div className="font-text">
                    <p className="account-details-name">{sessionUser.first_name} {sessionUser.last_name}</p>
                    {accountDetailsTab === 1 ? <p className="account-details-tab-bold">Home</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(1)}}>Home</p>}
                    {accountDetailsTab === 2 ? <p className="account-details-tab-bold">Personal Information</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(2)}}>Personal Information</p>}
                    {accountDetailsTab === 3 ? <p className="account-details-tab-bold">Address Book</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(3)}}>Address Book</p>}
                    {accountDetailsTab === 4 ? <p className="account-details-tab-bold">Orders</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(4)}}>Orders</p>}
                    {accountDetailsTab === 5 ? <p className="account-details-tab-bold">Museums</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(5)}}>Museums</p>}{accountDetailsTab === 6 ? <p className="account-details-tab-bold">Museum Central Club</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(6)}}>Museum Central Club</p>}
                    {accountDetailsTab === 7 ? <p className="account-details-tab-bold">Change my password</p> : <p className="account-details-tab" onClick={() => {setAccountDetailsTab(7)}}>Change my password</p>}
                    <p onClick={logout} className="account-details-tab">Sign out</p>
                </div>
                {accountDetailsTab === 1 && <div className="account-details-home-container">
                    <div className="account-details-home-card">
                        <h2>Club Boutiques de Musées</h2>
                        <p>Collect points with your online purchases and receive loyalty vouchers</p>
                        <p>Take part in private events</p>
                        <p>Benefit from special offers</p>
                    </div>
                    <div className="account-details-home-card">
                        <h2>My details</h2>
                        <p>{sessionUser.first_name} {sessionUser.last_name}</p>
                        <p>{sessionUser.email}</p>
                        <p>Client Number: {sessionUser.id}</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}
