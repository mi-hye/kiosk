import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import fetchData from "../utility/fetchData";

interface ResponseType {
	[key: string]: number | string;
}

type DataType = ResponseType;
type Handler = (data?: ResponseType) => void;

const usePost = (
	query: string,
	queryKey: string,
	handler?: Handler
) => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (data: DataType) =>
			fetchData(query, { method: "POST", body: data }),
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
