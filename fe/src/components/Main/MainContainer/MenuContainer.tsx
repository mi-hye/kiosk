import useGet from "../../../hooks/useGet";
import Menu from "./Menu";

function MenuContainer() {
	const {
		data: menus,
		error,
		isLoading,
	} = useGet("menus", "/menus", true);

	if (isLoading) return <div>로딩중</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="h-[80%] m-3 grid grid-rows-4 grid-cols-4">
			{(menus as Menu[]).map((menu) => (
				<Menu key={menu.id} menu={menu} />
			))}
		</div>
	);
}

export default MenuContainer;
