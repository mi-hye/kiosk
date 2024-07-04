import MenuContainer from "./MenuContainer/MenuContainer";
import MenuBottom from "./MenuBottom/MenuBottom";

function Container() {
	return (
		<div className="w-full h-[93%] border-[1px] border-color-sub rounded-b-md rounded-tr-md overflow-hidden">
			<MenuContainer />
			<MenuBottom />
		</div>
	);
}

export default Container;
