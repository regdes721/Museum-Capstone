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
  const [showMenu2, setShowMenu2] = useState(false);
  const ulRef = useRef();

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const ulClassName2 = "profile-dropdown" + (showMenu2 ? "" : " hidden");

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const toggleMenu2 = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu2(!showMenu2);
  };

  // useEffect(() => {
  //   if (!showMenu && !showMenu2) return;

  //   const closeMenu = (e) => {
  //     if (ulRef.current && !ulRef.current.contains(e.target)) {
  //       setShowMenu(false);
  //     }
  //   };

  //   const closeMenu2 = (e) => {
  //     if (ulRef.current && !ulRef.current.contains(e.target)) {
  //       setShowMenu2(false);
  //     }
  //   };

  //   document.addEventListener("click", closeMenu);

  //   document.addEventListener("click", closeMenu2);

  //   return () => {
  //     document.removeEventListener("click", closeMenu);
  //     document.removeEventListener("click", closeMenu2);
  //   }
  // }, [showMenu, showMenu2]);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    }
  }, [showMenu]);

  useEffect(() => {
    if (!showMenu2) return;

    const closeMenu2 = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu2(false);
      }
    };

    document.addEventListener("click", closeMenu2);

    return () => {
      document.removeEventListener("click", closeMenu2);
    }
  }, [showMenu2]);

  const closeMenu = () => setShowMenu(false);

  const closeMenu2 = () => setShowMenu2(false);

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
          <button className="nav-left-button" onClick={toggleMenu2}>MENU</button>
          {showMenu2 &&
            <ul className={ulClassName2} ref={ulRef}>
              <NavLink to="/products/posters-stationery"><li onClick={closeMenu2}>Posters & Stationary</li></NavLink>
              <NavLink to="/products/beauty"><li onClick={closeMenu2}>Beauty</li></NavLink>
              <NavLink to="/products/decoration"><li onClick={closeMenu2}>Decoration</li></NavLink>
              <NavLink to="/products/books"><li onClick={closeMenu2}>Books</li></NavLink>
              <NavLink to="/products/kids"><li onClick={closeMenu2}>Kids</li></NavLink>
              <NavLink to="/products/fashion-accessories"><li onClick={closeMenu2}>Fashion & Accessories</li></NavLink>
              <NavLink to="/products/jewellery"><li onClick={closeMenu2}>Jewellery</li></NavLink>
              <NavLink to="/products/engravings"><li onClick={closeMenu2}>Engravings</li></NavLink>
              <NavLink to="/products/sculpture"><li onClick={closeMenu2}>Sculpture</li></NavLink>
              <NavLink to="/products/print-on-demand"><li onClick={closeMenu2}>Print on Demand</li></NavLink>
            </ul>
          }
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
