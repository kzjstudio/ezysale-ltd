import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
import { setIsCartOpen } from "../../redux-store/cart/cart.reducer";

const CartDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const goTOCheckOut = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goTOCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
