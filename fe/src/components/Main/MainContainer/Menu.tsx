const src =
	"https://img.79plus.co.kr/megahp/manager/upload/menu/20240610113252_1717986772176_6c36zo5yuf.jpg";
const coffeeName = "할메가커피";
const explain =
	"우리 할머니께서 즐겨드시던 달달한 믹스 커피 스타일로 만든 메가MGC커피만의 시원한 커피 음료";
const price = "3800원";

function Menu() {
	return (
		<div className="bg-white m-1 cursor-pointer text-sm flex-center flex-col">
			<img
				className="size-[100px]"
				src={src}
				alt={coffeeName}
			/>
			<span>{coffeeName}</span>
			<span className="text-red-400">{price}</span>
		</div>
	);
}

export default Menu;
