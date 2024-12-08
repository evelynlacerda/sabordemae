import Flavor from "./components/flavors";
import Quantity from "./components/quantity";

const Order = () => {
	return (
		<div className="flex flex-col gap-4 mt-24">
			<div className="box">
				<h1 className="title">Etapa 1</h1>
				<div className="flex flex-col gap-8">
					<Quantity />
					<Flavor />
				</div>
			</div>
			<div className="box">
				<h1 className="title">Etapa 2</h1>
				<div className="flex flex-col gap-8">
				</div>
			</div>
		</div>
	);
};

export default Order;
