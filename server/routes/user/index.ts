import express from "express";
import passport from "passport";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../../controllers/user/index";

const router = express.Router();

router.post("/login", passport.authenticate("local"), userLogin);
router.post("/logout", userLogout);
router.post("/register", userRegister);

export default router;
