import { useContext } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectedItemsContext } from "@/context/selectedItemsContext";
import { QUANTITY_SELECT } from "@/constants/flavors";

const Quantity = () => {
	const { setSelectedItems } = useContext(SelectedItemsContext);

	const handleSelectChange = (value: string) => {
		const selectedItem = QUANTITY_SELECT.find(
			(item) => item.value.toString() === value
		);

		if (selectedItem) setSelectedItems([selectedItem]);
	};

	return (
		<div>
			<h2 className="subtitle">Quantidade</h2>
			<Select onValueChange={handleSelectChange}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Selecione a quantidade" />
				</SelectTrigger>
				<SelectContent className="w-[50%]">
					{QUANTITY_SELECT.map((item) => (
						<SelectItem key={item.value} value={item.value.toString()}>
							{item.text}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default Quantity;
