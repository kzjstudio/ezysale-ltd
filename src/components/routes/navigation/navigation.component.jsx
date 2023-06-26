import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./navigation.component.scss";
import CartDropDown from "../../cart-dropdown/cart-dropdown";
import { signOutUser } from "../../../utils/firebase/firebase.utils.js";
import { selectIsCartOpen } from "../../../redux-store/cart/cart.selector";
import { setCurrentUser } from "../../../redux-store/user/user.reducer";

const Navigation = () => {
  const currentUser = useSelector(setCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          EZYSALE
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}{" "}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
