import express from "express"
import { getCart, addToCart, updateCartItem, removeFromCart, clearCart } from "../controllers/cartController.js";
import { protect } from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.route('/')
  .get(protect, getCart)
  .post(protect, addToCart)
  .delete(protect, clearCart);

cartRouter.route('/:id')
  .put(protect, updateCartItem)
  .delete(protect, removeFromCart);

export default cartRouter
