import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


export const createUser = async (req, res) => {

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "All the fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPass,
            role
        });

        res.status(201).json({
            msg: "User Created Successfully !!",
            userData: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }

    catch (err) {
        res.status(500).json({ msg: "Server error in creating User" });
    }
};

export const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: "User doesnt exist" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign(
        { id: user._id },
        JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
        msg: "User logged In Successfully !!",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });

}

