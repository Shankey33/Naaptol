import express from 'express';
import { registerUser, loginUser, auth, getUserProfile } from '../Controller/userController.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/', auth, getUserProfile);

export default userRouter;