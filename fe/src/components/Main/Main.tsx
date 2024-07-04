import Container from "./MainContainer/Container";
import MenuTab from "./MenuTab/MenuTab";

function Main() {
	return (
		<main className="mx-3 h-[90%]">
			<MenuTab />
			<Container/>
		</main>
	);
}

export default Main;
