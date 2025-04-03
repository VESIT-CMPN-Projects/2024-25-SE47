import express from "express"
import { createOrder, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders, getOrders, updateOrderShipping, cancelOrder } from "../controllers/orderController.js";
import { protect, admin } from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.route('/')
  .post(protect, createOrder)
  .get(protect, admin, getOrders);

orderRouter.route('/myorders')
  .get(protect, getMyOrders);

orderRouter.route('/:id')
  .get(protect, getOrderById);

orderRouter.route('/:id/pay')
  .put(protect, updateOrderToPaid);

orderRouter.route('/:id/deliver')
  .put(protect, admin, updateOrderToDelivered);

orderRouter.route('/:id/ship')
  .put(protect, admin, updateOrderShipping);

orderRouter.route('/:id/cancel')
  .put(protect, cancelOrder);

export default orderRouter
