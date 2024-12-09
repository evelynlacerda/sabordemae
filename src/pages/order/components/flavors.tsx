// import { useState } from "react";
// import { FLAVORS_ITEMS } from "@/constants/flavors";

// import { Label } from "@/components/ui/label";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Flavor = () => {
// 	const [selectedItems, setSelectedItems] = useState<string[]>([]);
// 	const [radioSelected, setRadioSelected] = useState<string | null>(null);
// 	const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

// 	const handleCheckboxChange = (id: string) => {
// 		setSelectedItems((prevSelectedItems) =>
// 			prevSelectedItems.includes(id)
// 				? prevSelectedItems.filter((item) => item !== id)
// 				: [...prevSelectedItems, id]
// 		);
// 		setRadioSelected(null); // Reset radio selection
// 	};

// 	const handleRadioChange = (value: string) => {
// 		setRadioSelected(value);
// 		setSelectedItems([]); // Reset checkbox selection
// 	};

// 	const handleQuantityChange = (id: string, delta: number) => {
// 		setQuantities((prevQuantities) => {
// 			const newQuantity = (prevQuantities[id] || 0) + delta;
// 			return {
// 				...prevQuantities,
// 				[id]: Math.max(0, Math.min(250, newQuantity)),
// 			};
// 		});
// 	};

// 	return (
// 		<>
// 			<div className="flavor">
// 				<h2 className="subtitle">Sabores</h2>
// 				<div className="flex flex-col gap-2">
// 					{FLAVORS_ITEMS.map((item) => (
// 						<div key={item.key} className="flex items-center gap-2">
// 							<input
// 								type="checkbox"
// 								id={item.id}
// 								checked={selectedItems.includes(item.id)}
// 								onChange={() => handleCheckboxChange(item.id)}
// 							/>
// 							<Label htmlFor={item.id} className="label">
// 								{item.flavorName}
// 							</Label>
// 						</div>
// 					))}
// 					<div className="flex items-center space-x-2">
// 						<input
// 							type="radio"
// 							id="misto"
// 							name="flavor"
// 							value="misto"
// 							onChange={(e) => handleRadioChange(e.target.value)}
// 							checked={radioSelected === "misto"}
// 						/>
// 						<Label htmlFor="misto">Misto</Label>
// 					</div>
// 				</div>
// 			</div>
// 			{!radioSelected && selectedItems.length > 0 && 
// 				defineQuantity(selectedItems, quantities, handleQuantityChange)}
// 		</>
// 	);
// };

// export default Flavor;

// const defineQuantity = (
// 	selectedItems: string[],
// 	quantities: { [key: string]: number },
// 	handleQuantityChange: (id: string, delta: number) => void
// ) => {
// 	const selectedFlavors = FLAVORS_ITEMS.filter((item) =>
// 		selectedItems.includes(item.id)
// 	).sort((a, b) => a.flavorName.localeCompare(b.flavorName));

// 	return (
// 		<div className="quantity">
// 			<h2 className="subtitle">Definir Quantidades</h2>
// 			{selectedFlavors.map((item) => (
// 				<div
// 					key={item.key}
// 					className="flavor-quantity flex justify-between items-center py-3 gap-2"
// 				>
// 					<p>{item.flavorName}</p>
// 					<div className="define-btn flex">
// 						<button
// 							className="button-qntd"
// 							type="button"
// 							onClick={() => handleQuantityChange(item.id, -1)}
// 						>
// 							<ChevronLeft />
// 						</button>
// 						<input type="number" value={quantities[item.id] || 0} readOnly />
// 						<button
// 							className="button-qntd"
// 							type="button"
// 							onClick={() => handleQuantityChange(item.id, 1)}
// 						>
// 							<ChevronRight />
// 						</button>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// import { useState } from "react";
import { FLAVORS_ITEMS } from "@/constants/flavors";

import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Flavor = ({
	setFlavorData,
	flavorData,
}: {
	setFlavorData: (data: { selectedItems: string[]; radioSelected: string | null; quantities: { [key: string]: number } }) => void;
	flavorData: {
		selectedItems: string[];
		radioSelected: string | null;
		quantities: { [key: string]: number };
	};
}) => {
	const handleCheckboxChange = (id: string) => {
		setFlavorData({
			...flavorData,
			selectedItems: flavorData.selectedItems.includes(id)
				? flavorData.selectedItems.filter((item) => item !== id)
				: [...flavorData.selectedItems, id],
			radioSelected: null, // Resetar seleção de rádio
		});
	};

	const handleRadioChange = (value: string) => {
		setFlavorData({
			...flavorData,
			radioSelected: value,
			selectedItems: [], // Resetar seleção de checkboxes
		});
	};

	const handleQuantityChange = (id: string, delta: number) => {
		setFlavorData({
			...flavorData,
			quantities: {
				...flavorData.quantities,
				[id]: Math.max(
					0,
					Math.min(250, (flavorData.quantities[id] || 0) + delta)
				),
			},
		});
	};

	return (
		<>
			<div className="flavor">
				<h2 className="subtitle">Sabores</h2>
				<div className="flex flex-col gap-2">
					{FLAVORS_ITEMS.map((item) => (
						<div key={item.key} className="flex items-center gap-2">
							<input
								type="checkbox"
								id={item.id}
								checked={flavorData.selectedItems.includes(item.id)}
								onChange={() => handleCheckboxChange(item.id)}
							/>
							<Label htmlFor={item.id} className="label">
								{item.flavorName}
							</Label>
						</div>
					))}
					<div className="flex items-center space-x-2">
						<input
							type="radio"
							id="misto"
							name="flavor"
							value="misto"
							onChange={(e) => handleRadioChange(e.target.value)}
							checked={flavorData.radioSelected === "misto"}
						/>
						<Label htmlFor="misto">Misto</Label>
					</div>
				</div>
			</div>
			{!flavorData.radioSelected &&
				flavorData.selectedItems.length > 0 &&
				defineQuantity(
					flavorData.selectedItems,
					flavorData.quantities,
					handleQuantityChange
				)}
		</>
	);
};

export default Flavor;

const defineQuantity = (
	selectedItems: string[],
	quantities: { [key: string]: number },
	handleQuantityChange: (id: string, delta: number) => void
) => {
	const selectedFlavors = FLAVORS_ITEMS.filter((item) =>
		selectedItems.includes(item.id)
	).sort((a, b) => a.flavorName.localeCompare(b.flavorName));

	return (
		<div className="quantity">
			<h2 className="subtitle">Definir Quantidades</h2>
			{selectedFlavors.map((item) => (
				<div
					key={item.key}
					className="flavor-quantity flex justify-between items-center py-3 gap-2"
				>
					<p>{item.flavorName}</p>
					<div className="define-btn flex">
						<button
							className="button-qntd"
							type="button"
							onClick={() => handleQuantityChange(item.id, -1)}
						>
							<ChevronLeft />
						</button>
						<input type="number" value={quantities[item.id] || 0} readOnly />
						<button
							className="button-qntd"
							type="button"
							onClick={() => handleQuantityChange(item.id, 1)}
						>
							<ChevronRight />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
