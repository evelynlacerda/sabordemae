import { createContext } from "react";

interface SelectedItem {
	value: number;
	price: number;
}

interface SelectedItemsContextType {
	selectedItems: SelectedItem[];
	setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
    totalPrice: number;
}

export const SelectedItemsContext = createContext<SelectedItemsContextType>({
	selectedItems: [],
	setSelectedItems: () => {},
    totalPrice: 0,
});
