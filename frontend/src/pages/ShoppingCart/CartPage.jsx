import React, { useState } from "react";
import styles from "./CartPage.module.css"; // Import CSS module

const CartPage = () => {
  // Sample cart data (replace this with actual data from state or context)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Brown Rice", price: 10, quantity: 2 },
    { id: 2, name: "Basmati Rice", price: 15, quantity: 1 },
    { id: 3, name: "Quinoa", price: 20, quantity: 3 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("🛒 Order has been placed!!"); // Show the pop-up message
    setCartItems([]); // Empty the cart
  };
  // Function to remove an item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className={styles.totalContainer}>
            <h2>Total Amount: ${totalPrice.toFixed(2)}</h2>

            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>


          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
