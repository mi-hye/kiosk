import MenuContainer from "./MenuContainer/MenuContainer";
import MenuBottom from "./MenuBottom/MenuBottom";

interface PropsType {
	category: string;
}

function Container({ category }: PropsType) {
	return (
		<div className="w-full h-[93%] border-[1px] border-color-sub rounded-b-md rounded-tr-md overflow-hidden">
			<MenuContainer category={category}/>
			<MenuBottom />
		</div>
	);
}

export default Container;
