const SERVER = process.env.REACT_APP_SERVER;

const uploadFile = async (formData: FormData) => {
	try {
		const response = await fetch(`${SERVER}/upload`, {
			method: "POST",
			body: formData,
		});
		if (!response.ok) throw new Error("에러!!");
		const data = await response.text();
		return data;
	} catch (err) {
		if (err instanceof Error)
			console.error("에러메세지", err.message);
	}
};

const handleUploadImg = async (file: File) => {
	const encodedFileName = encodeURIComponent(file.name);
	const formData = new FormData();
	formData.append("uploadImg", file, encodedFileName);
	await uploadFile(formData);
};

export default handleUploadImg;
