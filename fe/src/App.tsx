import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="w-screen h-screen flex-center min-h-[1000px] min-w-[700px]">
				<div className="w-[740px] h-[1000px] bg-color-main rounded-lg">
					<Header />
					<Main />
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}

export default App;
