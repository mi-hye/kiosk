interface PropsType {
	menu: Menu;
}

function Menu({ menu }: PropsType) {
	return (
		<div className="bg-white m-1 cursor-pointer text-sm flex-center flex-col">
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
