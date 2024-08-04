import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/UserRoute.js";
import AuthRouter from "./routes/AuthRoute.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
app.use(express.json());

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Real-Estate-Marketplace",
            version: "1.0.0",
        },
    },
    apis: ["./index.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

/**
 * @openapi
 * /:
 *   get:
 *     responses:
 *       200:
 *         description: OK.
 */
app.get("/", (req, res) => {
    res.send("Welcom");
});

/**
 * @swagger
 * components:
 *     schemas:
 *        User:
 *          type: object
 *          properties:
 *              username:
 *                   type: string
 *              email:
 *                   type: string
 *              password:
 *                   type: string
 */

app.use("/api/user", UserRouter);

app.use("/api/auth", AuthRouter);

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
