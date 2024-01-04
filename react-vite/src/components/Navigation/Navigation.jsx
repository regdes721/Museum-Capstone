import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

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
