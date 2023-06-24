import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "./navigation.component.scss";
import CartDropDown from "../../cart-dropdown/cart-dropdown";
import { signOutUser } from "../../../utils/firebase/firebase.utils.js";
import { CartContext } from "../../../context/cart.context";
import { selectCurrentUser } from "../../../redux-store/user/user.selector";

const Navigation = () => {
const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);
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
