import express from "express"
import { getProductById, getProducts, deleteProduct, createProduct, updateProduct, getTopProducts } from "../controllers/productController.js";
import { protect, admin } from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

productRouter.get('/top', getTopProducts);

productRouter.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default productRouter;
