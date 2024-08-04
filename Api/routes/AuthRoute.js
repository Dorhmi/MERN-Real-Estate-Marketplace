import express from "express";
import { signup } from "../controllers/AuthController.js";

const router = express.Router();

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

export default router;
