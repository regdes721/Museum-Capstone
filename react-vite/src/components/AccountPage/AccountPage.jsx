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
                    <div className="account-details-home-card font-text">
                        <img src="https://www.boutiquesdemusees.fr/img/pict-club.gif" width="119" height="90" />
                        <h2>Club Boutiques de Musées</h2>
                        <p>Collect points with your online purchases and receive loyalty vouchers</p>
                        <p>Take part in private events</p>
                        <p>Benefit from special offers</p>
                    </div>
                    <div className="account-details-home-card font-text">
                        <img src="https://www.boutiquesdemusees.fr/img/pict-carnet.gif" width="66" height="85" />
                        <h2>My details</h2>
                        <p>{sessionUser.first_name} {sessionUser.last_name}</p>
                        <p>{sessionUser.email}</p>
                        <p>Client Number: {sessionUser.id}</p>
                    </div>
                </div>}
                {accountDetailsTab === 6 && <div className="account-details-club-container font-text">
                    <h2>Become a member and enjoy exclusive benefits</h2>
                    <div className="account-details-club-grid">
                        <div>
                            <div className="account-details-club-img">
                                <img src="https://www.boutiquesdemusees.fr/img/pict-fidelite.gif" width="62" height="54" />
                            </div>
                            <h3>Loyalty points</h3>
                            <p>1 € spent* = 1 point 150 points = 1 loyalty voucher to the value of 7,50 €**</p>
                        </div>
                        <div>
                            <div className="account-details-club-img">
                                <img src="https://www.boutiquesdemusees.fr/img/pict-privilege.gif" width="54" height="77" />
                            </div>
                            <h3>Special events</h3>
                            <p>Discover our know-how, mini-conferences, dedications...</p>
                        </div>
                        <div>
                            <div className="account-details-club-img">
                                <img src="https://www.boutiquesdemusees.fr/img/pict-offres.gif" width="48" height="62" />
                            </div>
                            <h3>Special offers</h3>
                            <p>Enjoy special offers and advance access on products</p>
                        </div>
                    </div>
                    <p>To join the loyalty program is simple, just check the corresponding box after paying for your next order.</p>
                </div>}
            </div>
        </div>
    )
}
