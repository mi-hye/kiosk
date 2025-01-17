import { useForm, SubmitHandler } from "react-hook-form";
import usePost from "../../hooks/usePost";
import handleUploadImg from "../../utility/uploadFile";
import { useContext } from "react";
import { CategoryContext } from "../../provider/CategoryProvider";

interface FormValues {
	name: string;
	explainText: string;
	price: string;
	tab: string;
	img: FileList;
}

const containerStyle =
	"flex-center flex-col w-full relative";
const labelStyle =
	"bg-color-sub text-white rounded-md px-2 py-1";
const inputLineStyle = "flex-evenly w-full";
const errMsgStyle =
	"text-xs absolute -bottom-5 text-red-500";

function Admin() {
	const [category] = useContext(CategoryContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>();
	const mutate = usePost("/menus", `menus?${category}`);
	const onSubmit: SubmitHandler<FormValues> = async (
		data: FormValues
	) => {
		const { img } = data;
		await handleUploadImg(img[0]);
		mutate({ ...data, img: img[0].name });
		reset();
	};

	return (
		<div className="fixed z-50 top-[15%] left-[50%] transform -translate-x-1/2 w-[500px] h-[470px] bg-color-main rounded-md border-[1px] border-color-sub">
			<form
				className="flex flex-col items-center justify-evenly h-full text-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={containerStyle}>
					<div className={inputLineStyle}>
						<label className={labelStyle} htmlFor="name">
							음료 이름
						</label>
						<input
							id="name"
							className="w-[50%] rounded-md px-2"
							{...register("name", {
								required: "Name is required",
							})}
						/>
					</div>
					{errors.name && (
						<p className={errMsgStyle}>
							{errors.name.message}
						</p>
					)}
				</div>
				<div className={containerStyle}>
					<div className={inputLineStyle}>
						<label className={labelStyle} htmlFor="price">
							음료 가격
						</label>
						<input
							id="price"
							className="w-[50%] rounded-md px-2"
							{...register("price", {
								required: "Price is required",
							})}
						/>
					</div>
					{errors.price && (
						<p className={errMsgStyle}>
							{errors.price.message}
						</p>
					)}
				</div>
				<div className={containerStyle}>
					<div className={inputLineStyle}>
						<label
							className={labelStyle}
							htmlFor="explainText"
						>
							음료 설명
						</label>
						<input
							id="explainText"
							className="w-[50%] rounded-md px-2"
							{...register("explainText", {
								required: "Explain is required",
							})}
						/>
					</div>
					{errors.explainText && (
						<p className={errMsgStyle}>
							{errors.explainText.message}
						</p>
					)}
				</div>
				<div className={containerStyle}>
					<div className={inputLineStyle}>
						<label className={labelStyle} htmlFor="tab">
							카테고리
						</label>
						<input
							id="tab"
							className="w-[50%] rounded-md px-2"
							{...register("tab", {
								required: "Tab is required",
							})}
						/>
					</div>
					{errors.tab && (
						<p className={errMsgStyle}>
							{errors.tab.message}
						</p>
					)}
				</div>
				<div className={containerStyle}>
					<div className={inputLineStyle}>
						<label className={labelStyle} htmlFor="img">
							사진
						</label>
						<input
							className="w-[45%]"
							id="img"
							type="file"
							accept=".jpg, .jpeg, .png"
							{...register("img", {
								required: "Image is required",
							})}
						/>
					</div>
					{errors.img && (
						<p className={errMsgStyle}>
							{errors.img.message}
						</p>
					)}
				</div>
				<button
					className="bg-color-sub p-1.5 rounded-md px-2 hover:opacity-70 text-white transition-opacity w-[70%]"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Admin;
