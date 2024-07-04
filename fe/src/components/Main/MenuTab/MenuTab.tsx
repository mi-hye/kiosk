import { useState } from "react";
import TabButton from "./TabButton";

const MENU = ["커피", "에이드", "티", "스무디"];

function MenuTab() {
	const [category, setCategory] = useState("커피");
	return (
		<div
			className="w-full flex items-end text-sm"
			role="tablist"
		>
			{MENU.map((menu, i) => (
				<TabButton
					menu={menu}
					key={i}
					category={category}
					setCategory={setCategory}
				/>
			))}
		</div>
	);
}

export default MenuTab;
