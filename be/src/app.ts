import express from "express";
import indexRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/", indexRouter); // indexRouter에 정의된 모든 라우팅을 사용

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${PORT}`
	);
});
