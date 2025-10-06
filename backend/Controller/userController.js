
import User from '../Models/User.js';


export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist, create an account" });
        } 
    }catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}
