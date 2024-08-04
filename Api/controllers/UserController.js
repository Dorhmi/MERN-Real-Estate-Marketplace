import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
    const allUsers = await User.find({});
    try {
        res.status(201).json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};
