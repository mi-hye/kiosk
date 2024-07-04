import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import fetchData from "../utility/fetchData";

interface FormValues {
	name: string;
	explainText: string;
	price: string;
	tab: string;
}

interface ResponseType {
	[key: string]: string;
}

type DataType = ResponseType | FormValues;
type Handler = (data: ResponseType) => void;

const usePost = (
	query: string,
	queryKey: string,
	handler?: Handler
) => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (data: DataType) =>
			fetchData(query, {
				method: "POST",
				body: data,
			}),
		onSuccess: (data) => {
			if (handler) handler(data);
			queryClient.invalidateQueries({
				queryKey: [queryKey],
			});
		},
		onError: (e) => {
			console.error("생성에러", e);
		},
	});
	return mutate;
};

export default usePost;
