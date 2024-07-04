import TabButton from "./TabButton";

const MENU = ["커피", "에이드", "티", "스무디"];

function MenuTab() {
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
