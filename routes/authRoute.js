import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD_POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
