import { useState } from "react";

interface PropsType {
	menu: string;
	key: number;
}

function TabButton({ menu, key }: PropsType) {
	return (
		<button
			key={key}
			className="border-[1px] border-b-0 border-color-sub p-1.5 rounded-t-md "
			role="tab"
			aria-selected="true"
			aria-controls="panel1"
		>
			{menu}
		</button>
	);
}

export default TabButton;
