interface PropsType {
	menu: string;
}

function TabButton({ menu }: PropsType) {
	return (
		<button
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
