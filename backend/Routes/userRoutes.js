import express from 'express';
import { registerUser, loginUser } from '../Controller/userController.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;