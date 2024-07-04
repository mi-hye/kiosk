import Menu from "./Menu";
import MenuBottom from "./MenuBottom";

function MenuContainer() {
	return (
		<div className="w-full h-[93%] border-[1px] border-color-sub rounded-b-md rounded-tr-md">
			<Menu />
			<MenuBottom />
		</div>
	);
}

export default MenuContainer;
