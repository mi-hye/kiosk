import { createContext, useReducer } from "react";

interface Props {
	children: React.ReactNode;
}

interface CartState {
	cart: Menu[];
	totalPrice: number;
}

interface Action {
	type: string;
	payload: Menu;
}

const initialState = { cart: [], totalPrice: 0 };

function reducer(
	state: CartState,
	action: Action
): CartState {
	switch (action.type) {
		case "ADD_CART":
			return {
				cart: [...state.cart, action.payload],
				totalPrice: 0,
			};
		// case "subtract_CART":
		// 	return { activeTotal: false, clickTotal: false, countCheckBox: state.countCheckBox + 1 };
		// case "MINUS_COUNT":
		// 	return { activeTotal: false, clickTotal: false, countCheckBox: state.countCheckBox - 1 };
		default:
			throw new Error();
	}
}

const CartContext = createContext<
	[CartState, React.Dispatch<Action>]
>([initialState, () => {}]);

function CartProvider({ children }: Props) {
	const [state, dispatch] = useReducer(
		reducer,
		initialState
	);
	return (
		<CartContext.Provider value={[state, dispatch]}>
			{children}
		</CartContext.Provider>
	);
}

export { CartProvider, CartContext };
