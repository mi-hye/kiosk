import express from "express";
import menusRouter from "./menus.js";

const router = express.Router();

// 기존에 있던 라우팅 로직
router.get("/", (req, res) => {
	res.send("Welcome to the API");
});

// menus 라우팅을 menus.ts 파일에서 처리
router.use("/menus", menusRouter);

export default router;
