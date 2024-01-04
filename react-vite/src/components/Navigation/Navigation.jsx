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

  const logout = () => {
    dispatch(sessionActions.thunkLogout());
    navigate("/")
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
        <NavLink to="/museums"><button>MUSEUMS</button></NavLink>
        <NavLink to="/"><h1>Museum Central</h1></NavLink>
        <button>Search</button>
        <button>Wishlist</button>
        <button>Cart</button>
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
