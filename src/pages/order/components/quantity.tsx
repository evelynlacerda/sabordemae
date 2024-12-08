import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Quantity = () => {
	return (
		<div>
			<h2 className="subtitle">Quantidade</h2>
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Selecione a quantidade" />
				</SelectTrigger>
				<SelectContent className="w-[50%]">
					<SelectItem value="10">10</SelectItem>
					<SelectItem value="20">20</SelectItem>
					<SelectItem value="30">30</SelectItem>
					<SelectItem value="40">40</SelectItem>
					<SelectItem value="50">50</SelectItem>
					<SelectItem value="60">60</SelectItem>
					<SelectItem value="70">70</SelectItem>
					<SelectItem value="80">80</SelectItem>
					<SelectItem value="90">90</SelectItem>
					<SelectItem value="100">100</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Quantity;
