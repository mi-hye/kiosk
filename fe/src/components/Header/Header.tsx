import { useState } from "react";
import Admin from "./Admin";

function Header() {
	const [admin, setAdmin] = useState(false);

	const handleShowAdmin = () => setAdmin(!admin);
	return (
		<>
			<header className="mx-3 mt-3 h-[5%]">
				<button
					className="text-lg hover:opacity-70 transition"
					onClick={handleShowAdmin}
				>
					🔐
				</button>
			</header>

			{admin && (
				<>
					<div
						className="w-screen h-screen fixed top-0 left-0 z-10"
						onClick={handleShowAdmin}
					></div>
					<Admin />
				</>
			)}
		</>
	);
}

export default Header;
