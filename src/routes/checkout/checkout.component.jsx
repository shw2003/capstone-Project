import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-Item/checkout-item.component";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeCartToItem,
    cartCount,
    clearItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;

        return (
          //   <div key={id}>
          //     <h2>{name}</h2>
          //     <span>{quantity}</span>
          //     <br />
          //     <span onClick={() => addItemToCart(cartItem)}>Incre</span>
          //     <br />
          //     <span onClick={() => removeCartToItem(cartItem)}>decr</span>
          //   </div>

          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        );
      })}

      <span className="total">Total: {cartCount}</span>
    </div>
  );
};
export default Checkout;
