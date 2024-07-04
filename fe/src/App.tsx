import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
	return (
		<div className="w-screen h-screen flex-center">
			<div className="w-[740px] h-[1000px] bg-color-main rounded-lg">
				<Header />
				<Main />
			</div>
		</div>
	);
}

export default App;
