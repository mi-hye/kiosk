import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", indexRouter); // indexRouter에 정의된 모든 라우팅을 사용

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${PORT}`
	);
});
