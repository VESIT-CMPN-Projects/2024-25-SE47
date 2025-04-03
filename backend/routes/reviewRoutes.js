import express from "express"
import { createReview, getProductReviews, deleteReview, updateReview } from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

const reviewRouter = express.Router();

reviewRouter.route('/')
  .post(protect, createReview);

reviewRouter.route('/product/:id')
  .get(getProductReviews);

reviewRouter.route('/:id')
  .delete(protect, deleteReview)
  .put(protect, updateReview);

export default reviewRouter
