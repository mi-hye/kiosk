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
		console.log("잘됨");
	} catch (error) {
		console.error("Error querying menus:", error);
		res
			.status(500)
			.json({ error: "Failed to fetch menus" });
	}
});

// router.post("/", async (req, res) => {
// 	const { name, explain_text, price, tab, img } = req.body;
// 	try {
// 		const [result] = await pool.query(
// 			"INSERT INTO menus (name, explain_text, price, tab, img) VALUES (?, ?, ?, ?, ?)",
// 			[name, explain_text, price, tab, img]
// 		);
// 		res.status(201).json({ id: result.insertId });
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).send("Server Error");
// 	}
// });

export default router;
