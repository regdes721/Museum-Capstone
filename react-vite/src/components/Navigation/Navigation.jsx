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
      <div>
        <h3>Professional Access</h3>
        {!sessionUser && (
          <OpenModalMenuItem
          itemText="Log In"
          modalComponent={<LoginFormModal />}
        />
        )}
        {sessionUser && (
          <div>
            <h3>My account</h3>
            <h3 onClick={logout}>Sign out</h3>
          </div>
        )}
      </div>
      <nav>
        <button>MENU</button>
        <NavLink to="/museums"><button onClick={closeMenu}>MUSEUMS</button></NavLink>
        <NavLink to="/"><h1>Museum Central</h1></NavLink>
        <button>Search</button>
        <button>Wishlist</button>
        <button>Cart</button>
        {sessionUser && (
          <div>
            <button onClick={toggleMenu}>Create</button>
            {showMenu &&
              <ul className={ulClassName} ref={ulRef}>
                <NavLink to="/museums/new"><li onClick={closeMenu}>Create Museum</li></NavLink>
              </ul>
              }
          </div>
        )}
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
