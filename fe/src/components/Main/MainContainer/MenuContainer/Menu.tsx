import { useContext } from "react";
import { CartContext } from "../../../../provider/CartProvider";

interface PropsType {
	menu: Menu;
}

function Menu({ menu }: PropsType) {
	const [, dispatch] = useContext(CartContext);
	const handleAddCart = () => {
		dispatch({ type: "ADD_CART", payload: menu });
	};
	return (
		<div
			className="bg-white m-1 cursor-pointer text-sm flex-center flex-col"
			onClick={handleAddCart}
		>
			<img
				className="size-[100px]"
				src={menu.img}
				alt={menu.name}
			/>
			<span>{menu.name}</span>
			<span className="text-red-400">{menu.price}원</span>
		</div>
	);
}

export default Menu;
