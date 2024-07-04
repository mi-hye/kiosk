import { useState } from "react";
import TabButton from "./TabButton";

const MENU = ["커피", "라떼", "에이드", "티", "프라페"];

function MenuTab() {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelected = () => setIsSelected(!isSelected);
  
	return (
		<div
			className="w-full flex items-end text-sm"
			role="tablist"
		>
			{MENU.map((menu, i) => (
				<TabButton menu={menu} key={i} />
			))}
		</div>
	);
}

export default MenuTab;
