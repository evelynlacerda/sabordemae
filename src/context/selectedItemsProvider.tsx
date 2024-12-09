import { useState, ReactNode } from "react";
import { SelectedItemsContext } from "./selectedItemsContext";

export const SelectedItemsProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [selectedItems, setSelectedItems] = useState<
		{ value: number; price: number }[]
	>([]);

	return (
		<SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
			{children}
		</SelectedItemsContext.Provider>
	);
};
