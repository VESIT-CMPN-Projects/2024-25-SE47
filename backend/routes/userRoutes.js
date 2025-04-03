import express from "express"
import { getUserProfile, updateUserProfile, getUserById, getUsers, deleteUser, updateUser } from "../controllers/userController.js";
import { protect, admin } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

userRouter.route('/')
  .get(protect, admin, getUsers);

userRouter.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default userRouter
