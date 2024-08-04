import express from "express";
import { getAllUsers } from "../controllers/UserController.js";

const router = express.Router();

/**
 * @swagger
 *    /api/user/users:
 *     get:
 *      tags:
 *        - User
 *      responses:
 *        200:
 *         description: OK
 *        content:
 *           application/json:
 *              schema:
 *                    type: array
 *                    items:
 *                       $ref: '#components/schemas/User'
 */
router.get("/users", getAllUsers);

export default router;
