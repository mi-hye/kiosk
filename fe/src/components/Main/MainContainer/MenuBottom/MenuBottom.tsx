import MenuList from "./MenuList";
import Payment from "./Payment";

function MenuBottom() {
	return (
		<div className="bg-white h-[20%] flex">
			<MenuList />
			<Payment />
		</div>
	);
}

export default MenuBottom;
