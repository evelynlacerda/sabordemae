import { useState, ReactNode, useMemo } from "react";
import { SelectedItemsContext } from "./selectedItemsContext";

export const SelectedItemsProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [selectedItems, setSelectedItems] = useState<
		{ value: number; price: number }[]
	>([]);

    const totalPrice = selectedItems?.reduce((total, item) => total + item.price, 0);

    const contextValue = useMemo(
        () => ({ selectedItems, setSelectedItems, totalPrice }),
        [selectedItems, totalPrice]
    );


	return (
        <SelectedItemsContext.Provider value={contextValue}>
			{children}
		</SelectedItemsContext.Provider>
	);
};
