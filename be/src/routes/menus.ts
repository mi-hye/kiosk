import express from "express";
import pool from "../config/db.js"; // MySQL 연결 설정 파일을 import
import dotenv from "dotenv";
import { ResultSetHeader } from "mysql2";

const router = express.Router();
dotenv.config();

// /menus 엔드포인트에서의 GET 요청 처리
router.get("/", async (req, res) => {
	const category = req.query.category;
	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.query(
			`SELECT * FROM menus WHERE tab = "${category}"`
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

router.post("/", async (req, res) => {
	const { name, explainText, price, tab, img } = req.body;
	const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${img}`;
	try {
		const [result] = await pool.query<ResultSetHeader>(
			"INSERT INTO menus (name, explain_text, price, tab, img) VALUES (?, ?, ?, ?, ?)",
			[name, explainText, price, tab, url]
		);
		res.status(200).json({ id: result.insertId, img });
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
});

export default router;
