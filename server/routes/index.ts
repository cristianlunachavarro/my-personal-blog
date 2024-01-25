import express from "express";
import userRouter from "./user/index";
import blogRouter from "./blog/index";

const router = express.Router();

router.use('/user', userRouter);
router.use('/blog', blogRouter);

export default router;
