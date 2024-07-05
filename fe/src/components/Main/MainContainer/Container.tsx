import MenuContainer from "./MenuContainer/MenuContainer";
import MenuBottom from "./MenuBottom/MenuBottom";
import { CartProvider } from "../../../provider/CartProvider";

function Container() {
	return (
		<div className="w-full h-[93%] border-[1px] border-color-sub rounded-b-md rounded-tr-md overflow-hidden">
			<CartProvider>
				<MenuContainer />
				<MenuBottom />
			</CartProvider>
		</div>
	);
}

export default Container;
