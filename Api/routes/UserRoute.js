import express from "express";
import { test } from "../controllers/UserController.js";

const router = express.Router();

/**
 * @swagger
 *    /api/user/test:
 *     get:
 *      tags:
 *        - User
 *      responses:
 *       200:
 *         description: OK.
 */
router.get("/test", test);

export default router;
