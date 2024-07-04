import { useContext } from "react";
import { CategoryContext } from "../../../provider/CategoryProvider";

interface PropsType {
	menu: string;
}

function TabButton({ menu }: PropsType) {
	const [category, setCategory] =
		useContext(CategoryContext);
	const handleSelected = () => setCategory(menu);
	return (
		<button
			className={`transition-colors border-[1px] border-b-0 border-r-0 border-color-sub p-1.5 rounded-t-md ${
				category === menu ? "bg-color-sub text-white" : ""
			} ${menu === "스무디" ? "border-r-[1px]" : ""}`}
			role="tab"
			onClick={handleSelected}
		>
			{menu}
		</button>
	);
}

export default TabButton;
