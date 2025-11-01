import bcrypt from 'bcryptjs';
import User from '../Models/User.js';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    try {
        // Validations
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        if(name.length < 3){
            return res.status(400).json({ message: "Name should be at least 3 characters long" });
        }

        if (!email.includes('@')){
            return res.status(400).json({ message: "Enter a valid email" });
        }

        if (password.length < 6){
            return res.status(400).json({ message: "Password should be at least 6 characters long, should contain 1 numeric value, 1 uppercase character, 1 lowercase character" });
        }

        if (!password.match(/\d/) || !password.match(/[a-z]/) || !password.match(/[A-Z]/)) {
            return res.status(400).json({ message: "Password should contain 1 numeric value, 1 uppercase character, 1 lowercase character" });
        }

        // Create new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();
        
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        return res.status(201).json({ message: "User registered successfully", newUser, token });
    }
    catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User does not exist, create an account" });
    }
    const check = await bcrypt.compare(password, user.password);
    try {
        // Validations
        if (!check) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        return res.status(200).json({ message: "User logged in successfully", user, token });

    }catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}
