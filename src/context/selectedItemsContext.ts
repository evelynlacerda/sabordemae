// import { createContext } from "react";

// interface SelectedItemsContextProps {
// 	selectedItems: { value: number; price: number }[];
// 	setSelectedItems: (items: { value: number; price: number }[]) => void;
// }

// export const SelectedItemsContext = createContext<SelectedItemsContextProps>({
// 	selectedItems: [],
// 	setSelectedItems: () => {},
// });

import { createContext } from "react";

interface SelectedItem {
	value: number;
	price: number;
}

interface SelectedItemsContextType {
	selectedItems: SelectedItem[];
	setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
}

export const SelectedItemsContext = createContext<SelectedItemsContextType>({
	selectedItems: [],
	setSelectedItems: () => {},
});
