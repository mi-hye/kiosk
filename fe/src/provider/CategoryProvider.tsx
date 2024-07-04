import { createContext, useState } from "react";

interface Props {
	children: React.ReactNode;
}
type CategoryType = [
	string,
	React.Dispatch<React.SetStateAction<string>>
];

const defaultContext: CategoryType = ["", () => {}];
const CategoryContext =
	createContext<CategoryType>(defaultContext);

function CategoryProvider({ children }: Props) {
	const [category, setCategory] = useState("커피");

	return (
		<CategoryContext.Provider
			value={[category, setCategory]}
		>
			{children}
		</CategoryContext.Provider>
	);
}

export { CategoryProvider, CategoryContext };
