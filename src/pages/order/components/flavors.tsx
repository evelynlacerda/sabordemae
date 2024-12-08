import { useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FLAVORS_ITEMS } from "@/constants/flavors";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Flavor = () => {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const [radioSelected, setRadioSelected] = useState<string | null>(null);
	const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

	const handleCheckboxChange = (id: string) => {
		setSelectedItems((prevSelectedItems) =>
			prevSelectedItems.includes(id)
				? prevSelectedItems.filter((item) => item !== id)
				: [...prevSelectedItems, id]
		);
		setRadioSelected(null); // Reset radio selection
	};

	const handleRadioChange = (value: string) => {
		setRadioSelected(value);
		setSelectedItems([]); // Reset checkbox selection
	};

	const handleQuantityChange = (id: string, delta: number) => {
		setQuantities((prevQuantities) => {
			const newQuantity = (prevQuantities[id] || 0) + delta;
			return {
				...prevQuantities,
				[id]: Math.max(0, Math.min(250, newQuantity)),
			};
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
								checked={selectedItems.includes(item.id)}
								onChange={() => handleCheckboxChange(item.id)}
							/>
							<Label htmlFor={item.id} className="label">
								{item.name}
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
							checked={radioSelected === "misto"}
						/>
						<Label htmlFor="misto">Misto</Label>
					</div>
				</div>
			</div>
			{!radioSelected && selectedItems.length > 0 && 
				defineQuantity(selectedItems, quantities, handleQuantityChange)}
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
	).sort((a, b) => a.name.localeCompare(b.name));

	return (
		<div className="quantity">
			<h2 className="subtitle">Definir Quantidades</h2>
			{selectedFlavors.map((item) => (
				<div
					key={item.key}
					className="flavor-quantity flex justify-between items-center py-3 gap-2"
				>
					<p>{item.name}</p>
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
