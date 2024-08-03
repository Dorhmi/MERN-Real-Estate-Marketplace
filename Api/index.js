import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/UserRoute.js";

dotenv.config();

const app = express();

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcom");
});
app.use("/api/user", UserRouter);

mongoose
    .connect(URL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
