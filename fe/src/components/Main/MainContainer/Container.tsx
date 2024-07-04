import MenuContainer from "./MenuContainer";
import MenuBottom from "./MenuBottom";

function Container() {
	return (
		<div className="w-full h-[93%] border-[1px] border-color-sub rounded-b-md rounded-tr-md">
			<MenuContainer />
			<MenuBottom />
		</div>
	);
}

export default Container;
