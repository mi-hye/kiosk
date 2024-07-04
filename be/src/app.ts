import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";

dotenv.config();

const app = express();
app.use(cors()); // 모든 도메인에서의 요청을 허용

app.use(express.json());
app.use("/", indexRouter); // indexRouter에 정의된 모든 라우팅을 사용

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${PORT}`
	);
});
