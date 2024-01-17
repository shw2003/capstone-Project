import "./cart-icon.styles.scss";
import React from "react";
import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartopen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartopen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img
        src="../../assets/shopping-bag.svg"
        alt="Shopping Bag"
        className="shopping-icon"
      />

      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
