import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import { thunkLoadCart, thunkLoadCartProducts } from "../../redux/carts";
import * as sessionActions from '../../redux/session';
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartObj = useSelector(state => state.cart.singleCart)
  const cart = Object.values(cartObj)
  const cartProducts = useSelector(state => state.cart.cart_products)
  const [quantity, setQuantity] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const ulRef = useRef();

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const ulClassName2 = "profile-dropdown-2" + (showMenu2 ? "" : " hidden");

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const toggleMenu2 = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu2(!showMenu2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!sessionUser) alert(`Please log in to view the cart`)
    else navigate('/cart')
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    if (!sessionUser) alert(`Please log in to view the wishlist`)
    else navigate('/wishlist')
  }

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

  useEffect(() => {
    dispatch(thunkLoadCart())
    dispatch(thunkLoadCartProducts())
}, [dispatch, sessionUser])

  useEffect(() => {
    let sum = 0;
    if (cart && cart[0] && cartProducts && cartProducts.length > 0) {
        cart[0].products.forEach((product) => {
            const quantity = cartProducts?.find((cart) => cart.product_id === product.id)?.quantity || 0;
            sum += quantity;
          });
    }
    setQuantity(sum);
  }, [cart, cartProducts]);

  const closeMenu = () => setShowMenu(false);

  const closeMenu2 = () => setShowMenu2(false);

  const logout = () => {
    dispatch(sessionActions.thunkLogout());
    navigate("/")
    closeMenu();
  };

  return (
    <header>
      <div className="header-margin-div">
        <div className="header-section-1">
          <NavLink to="https://pro.boutiquesdemusees.fr/en/" className="no-underline" target="_blank"><h3 className="font-header">Professional Access <i className="fa-solid fa-angle-right"></i></h3></NavLink>
          {!sessionUser && (
            <div className="header-section-1a">
              <NavLink to="https://github.com/regdes721" target="_blank" className="nav-title"><i className="fab fa-github"> </i></NavLink>
              <NavLink to="https://www.linkedin.com/in/reginalddesrosiers/" target="_blank" className="nav-title"><i className="fab fa-fw fa-linkedin-in"></i></NavLink>
              <NavLink to="https://wellfound.com/u/reginald-desrosiers" target="_blank" className="nav-title"><i className="fa-brands fa-angellist"></i></NavLink>
              <OpenModalMenuItem
              itemText="Log In"
              modalComponent={<LoginFormModal />}
              />
            </div>
          )}
          {sessionUser && (
            <div className="header-section-1a">
              <NavLink to="https://github.com/regdes721" target="_blank" className="nav-title"><i className="fab fa-github"> </i></NavLink>
              <NavLink to="https://www.linkedin.com/in/reginalddesrosiers/" target="_blank" className="nav-title"><i className="fab fa-fw fa-linkedin-in"></i></NavLink>
              <NavLink to="https://wellfound.com/u/reginald-desrosiers" target="_blank" className="nav-title"><i className="fa-brands fa-angellist"></i></NavLink>
              {/* <h3 onClick={() => (alert(`Feature Coming Soon...`))}>My account</h3> */}
              <h3 onClick={logout} className="cursor-pointer">Sign out</h3>
            </div>
          )}
        </div>
        <nav>
          <div className="nav-left">
            <button className="nav-left-button" onClick={toggleMenu2}><i className="fa-solid fa-bars"></i> MENU</button>
            {showMenu2 &&
              <ul className={ulClassName2} ref={ulRef}>
                <NavLink to="/products/posters-stationery" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Posters & Stationary</li></NavLink>
                <NavLink to="/products/beauty" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Beauty</li></NavLink>
                <NavLink to="/products/decoration" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Decoration</li></NavLink>
                <NavLink to="/products/books" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Books</li></NavLink>
                <NavLink to="/products/kids" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Kids</li></NavLink>
                <NavLink to="/products/fashion-accessories" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Fashion & Accessories</li></NavLink>
                <NavLink to="/products/jewellery" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Jewellery</li></NavLink>
                <NavLink to="/products/engravings" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Engravings</li></NavLink>
                <NavLink to="/products/sculpture" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Sculpture</li></NavLink>
                <NavLink to="/products/print-on-demand" className="no-underline nav-menu font-text"><li onClick={closeMenu2}>Print on Demand</li></NavLink>
              </ul>
            }
            <NavLink to="/museums"><button onClick={closeMenu} className="nav-left-button">MUSEUMS</button></NavLink>
          </div>
          <NavLink to="/" className='no-underline'><h1 className="nav-title font-header">Museum Central</h1></NavLink>
          <div className="nav-right">
            {
              !cart[0] || !sessionUser || (sessionUser && cart[0].user_id != sessionUser.id) || cart[0].products.length === 0 ? <button className="nav-right-button" onClick={handleSubmit}><i className="fa-solid fa-cart-shopping"></i></button> :
              <button className="cart-button-quantity" onClick={handleSubmit}>{quantity} <i className="fa-solid fa-cart-shopping"></i></button>
            }
            <button className="nav-right-button" onClick={handleSubmit2}><i className="fa-regular fa-heart"></i></button>
            {/* <button className="nav-search" onClick={() => (alert(`Feature Coming Soon...`))}><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="nav-right-button" onClick={() => (alert(`Feature Coming Soon...`))}><i className="fa-solid fa-cart-shopping"></i></button> */}
            {sessionUser && (
              <div>
                <button onClick={toggleMenu} className="nav-plus-button"><i className="fa-solid fa-plus"></i></button>
                {showMenu &&
                  <ul className={ulClassName} ref={ulRef}>
                    <NavLink to="/museums/new" className="no-underline nav-menu font-text"><li onClick={closeMenu}>Create Museum</li></NavLink>
                    <NavLink to="/products/new" className="no-underline nav-menu font-text"><li onClick={closeMenu}>Create Product</li></NavLink>
                  </ul>
                  }
              </div>
            )}
          </div>
        </nav>
      </div>
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
