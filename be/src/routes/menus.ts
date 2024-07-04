import express from "express";
import pool from "../config/db.js"; // MySQL 연결 설정 파일을 import
const router = express.Router();

// /menus 엔드포인트에서의 GET 요청 처리
router.get("/", async (req, res) => {
	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.query(
			"SELECT * FROM menus"
		);
		connection.release();
		res.json(rows);
	} catch (error) {
		console.error("Error querying menus:", error);
		res
			.status(500)
			.json({ error: "Failed to fetch menus" });
	}
});

export default router;
