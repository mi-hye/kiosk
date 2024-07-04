import express from "express";
import {
	PutObjectCommand,
	S3Client,
} from "@aws-sdk/client-s3";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import dotenv from "dotenv";
import multer from "multer";

const router = express.Router();
dotenv.config();

const upload = multer();

// AWS S3 클라이언트 초기화
const s3Client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: fromNodeProviderChain(), // Node.js 환경에서 AWS 자격 증명을 가져오기
});

router.post(
	"/",
	upload.single("uploadImg"),
	async (req, res) => {
		const file = req.file;
		if (!file) {
			res.status(500).send("파일이 존재하지 않음");
			return;
		}

		const decodedFileName = decodeURIComponent(
			file.originalname
		);
		const uploadParams = {
			Bucket: process.env.S3_BUCKET_NAME,
			Key: decodedFileName,
			Body: file.buffer,
		};

		try {
			const data = await s3Client.send(
				new PutObjectCommand(uploadParams)
			);
			console.log("Successfully uploaded file", data);
			res.send("File uploaded to S3");
		} catch (err) {
			console.error("Error uploading file", err);
			res.status(500).send("Error uploading file to S3");
		}
	}
);
export default router;
