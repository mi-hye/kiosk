import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
	name: string;
	explainText: string;
	price: number;
	tab: string;
	img: FileList;
}

function Admin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="fixed z-50 top-[15%] left-[50%] transform -translate-x-1/2 w-[550px] h-[750px] bg-color-main rounded-lg ">
			<form
				className="flex flex-col items-center justify-evenly h-full text-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex-evenly w-full">
					<label htmlFor="name">음료 이름</label>
					<input
						id="name"
						className="w-[50%] rounded-lg"
						{...register("name", {
							required: "Name is required",
						})}
					/>
					{errors.name && <p>{errors.name.message}</p>}
				</div>
				<div className="flex-evenly w-full">
					<label htmlFor="price">음료 가격</label>
					<input
						id="price"
						className="w-[50%] rounded-lg"
						{...register("price", {
							required: "Price is required",
						})}
					/>
					{errors.price && <p>{errors.price.message}</p>}
				</div>
				<div className="flex-evenly w-full">
					<label htmlFor="explainText">음료 설명</label>
					<input
						id="explainText"
						className="w-[50%] rounded-lg"
						{...register("explainText", {
							required: "Explain is required",
						})}
					/>
					{errors.explainText && (
						<p>{errors.explainText.message}</p>
					)}
				</div>
				<div className="flex-evenly w-full">
					<label htmlFor="tab">메뉴 위치</label>
					<input
						id="tab"
						className="w-[50%] rounded-lg"
						{...register("tab", {
							required: "Tab is required",
						})}
					/>
					{errors.tab && <p>{errors.tab.message}</p>}
				</div>
				<div className="flex-evenly w-full">
					<label htmlFor="img">Image</label>
					<input
						id="img"
						type="file"
						accept=".jpg, .jpeg, .png"
						{...register("img", {
							required: "Image is required",
						})}
					/>
					{errors.img && <p>{errors.img.message}</p>}
				</div>
				<button
					className="bg-color-sub p-1.5 rounded-md hover:opacity-70 text-white transition-opacity w-[70%]"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Admin;
