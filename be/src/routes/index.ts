import express from "express";
import menusRouter from "./menus.js";
import uploadRouter from "./upload.js";

const router = express.Router();

// 기존에 있던 라우팅 로직
router.get("/", (req, res) => {
	res.send("Welcome to the Kiosk API");
});

router.use("/menus", menusRouter);
router.use("/upload", uploadRouter);

export default router;
