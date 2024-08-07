import express from "express";
import { signin, signup } from "../controllers/AuthController.js";

const router = express.Router();

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
/**
 * @swagger
 * components:
 *     schemas:
 *        valideUser:
 *          type: object
 *          properties:
 *              email:
 *                   type: string
 *              password:
 *                   type: string
 */

/**
 * @swagger
 *    /api/auth/signup:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                $ref: '#components/schemas/User'
 *     responses:
 *        201:
 *         description: ok
 */
router.post("/signup", signup);
/**
 * @swagger
 *    /api/auth/signin:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                $ref: '#components/schemas/valideUser'
 *     responses:
 *        201:
 *         description: ok
 */
router.post("/signin", signin);

export default router;
