import TabButton from "./TabButton";

interface PropsType {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const MENU = ["커피", "에이드", "티", "스무디"];

function MenuTab({ category, setCategory }: PropsType) {
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
