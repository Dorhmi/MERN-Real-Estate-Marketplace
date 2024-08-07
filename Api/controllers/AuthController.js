import User from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("User Created successfuly");
    } catch (error) {
        // res.status(500).json("oops");
        // console.log(error.message);
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const valideUser = await User.findOne({ email });
        if (!valideUser) return next(errorHandler(404, "User not found!"));
        const validePassword = bcryptjs.compareSync(
            password,
            valideUser.password
        );
        if (!validePassword) return next(errorHandler(401, "Wrong Password!"));
        const token = jwt.sign({ id: valideUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = valideUser._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};
