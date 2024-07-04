import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

const pool = mysql.createPool({
	host, // MySQL 서버 호스트
	user, // MySQL 사용자 이름
	password, // MySQL 사용자 비밀번호
	database, // 연결할 데이터베이스 이름
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

export default pool;
