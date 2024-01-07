import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import * as sessionActions from '../../redux/session';
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = () => {
    dispatch(sessionActions.thunkLogout());
    navigate("/")
    closeMenu();
  };

  return (
    <header>
      <div className="header-section-1">
        <h3>Professional Access</h3>
        {!sessionUser && (
          <OpenModalMenuItem
          itemText="Log In"
          modalComponent={<LoginFormModal />}
        />
        )}
        {sessionUser && (
          <div className="header-section-1a">
            <h3>My account</h3>
            <h3 onClick={logout} className="cursor-pointer">Sign out</h3>
          </div>
        )}
      </div>
      <nav>
        <div className="nav-left">
          <button className="nav-left-button" onClick={() => (alert(`Feature Coming Soon...`))}>MENU</button>
          <NavLink to="/museums"><button onClick={closeMenu} className="nav-left-button">MUSEUMS</button></NavLink>
        </div>
        <NavLink to="/"><h1 className="nav-title">Museum Central</h1></NavLink>
        <div className="nav-right">
          <button className="nav-search" onClick={() => (alert(`Feature Coming Soon...`))}><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="nav-right-button" onClick={() => (alert(`Feature Coming Soon...`))}><i className="fa-regular fa-heart"></i></button>
          <button className="nav-right-button" onClick={() => (alert(`Feature Coming Soon...`))}><i className="fa-solid fa-cart-shopping"></i></button>
          {sessionUser && (
            <div>
              <button onClick={toggleMenu} className="nav-plus-button"><i className="fa-solid fa-plus"></i></button>
              {showMenu &&
                <ul className={ulClassName} ref={ulRef}>
                  <NavLink to="/museums/new"><li onClick={closeMenu}>Create Museum</li></NavLink>
                </ul>
                }
            </div>
          )}
        </div>
      </nav>
    </header>
    // <ul>
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>

    //   <li>
    //     <ProfileButton />
    //   </li>
    // </ul>
  );
}

export default Navigation;
