import { useState } from "react";
import Container from "./MainContainer/Container";
import MenuTab from "./MenuTab/MenuTab";

function Main() {
	const [category, setCategory] = useState("커피");
	return (
		<main className="mx-3 h-[90%]">
			<MenuTab
				category={category}
				setCategory={setCategory}
			/>
			<Container category={category} />
		</main>
	);
}

export default Main;
