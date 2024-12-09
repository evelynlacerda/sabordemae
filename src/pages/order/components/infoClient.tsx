// import { useState } from "react";
// import { PAYMENT_METHOD, SENDING_METHOD, MONEY_CHANGE_ITEMS } from "@/constants/infoOrder";
// import { Label } from "@/components/ui/label";

// const InfoCLient = () => {
// 	const [sendingMethod, setSendingMethod] = useState<number | null>(null);
// 	const [paymentMethod, setPaymentMethod] = useState<number | null>(null);
// 	const [moneyChange, setMoneyChange] = useState<number | null>(null);

// 	const handleSendingMethod = (key: number) => {
// 		setSendingMethod(key);
// 	};

// 	const handlePaumentMethod = (key: number) => {
// 		setPaymentMethod(key);
// 	};

// 	const handleMoneyChange = (key: number) => {
// 		setMoneyChange(key);
// 	};

// 	return (
// 		<>
// 			<div>
// 				<h2>Nome e Sobrenome</h2>
// 				<input
// 					type="text"
// 					className="input-text"
// 					placeholder="Digite um nome e sobrenome..."
// 				/>
// 			</div>
// 			<div className="send-method">
// 				<h2>Envio</h2>
// 				<div className="flex justify-between">
// 					{SENDING_METHOD.map((item) => (
// 						<div
// 							key={item.key}
// 							className="flex items-center flex-grow space-x-2"
// 						>
// 							<input
// 								type="radio"
// 								id={item.id}
// 								checked={sendingMethod === item.key}
// 								onChange={() => handleSendingMethod(item.key)}
// 							/>
// 							<Label htmlFor={item.id}>{item.name}</Label>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 			{sendingMethod === 2 && (
// 				<>
// 					<div className="address">
// 						<h2>Endereço</h2>
// 						<input
// 							type="text"
// 							className="input-text"
// 							placeholder="Digite seu endereço completo..."
// 						/>
// 					</div>
// 					<div className="reference">
// 						<h2>Ponto de Referência</h2>
// 						<input
// 							type="text"
// 							className="input-text"
// 							placeholder="Digite um ou mais pontos de referência..."
// 						/>
// 					</div>
// 				</>
// 			)}
// 			<div className="payment-method">
// 				<h2>Pagamento</h2>
// 				<div className="flex flex-col gap-3">
// 					{PAYMENT_METHOD.map((item) => (
// 						<div key={item.key} className="flex items-center space-x-2">
// 							<input
// 								type="radio"
// 								id={item.id}
// 								checked={paymentMethod === item.key}
// 								onChange={() => handlePaumentMethod(item.key)}
// 							/>
// 							<Label htmlFor={item.id}>{item.name}</Label>
// 						</div>
// 					))}
// 				</div>
// 				{paymentMethod === 4 && (
// 					<div className="money-change">
// 						<span>Precisa de troco?</span>
// 						<div className="flex justify-between">
// 							{MONEY_CHANGE_ITEMS.map((item) => (
// 								<div
// 									key={item.key}
// 									className="flex items-center flex-grow space-x-2"
// 								>
// 									<input
// 										type="radio"
// 										id={item.id}
// 										checked={moneyChange === item.key}
//                                         onChange={() => handleMoneyChange(item.key)}
// 									/>
// 									<Label htmlFor={item.id}>{item.name}</Label>
// 								</div>
// 							))}
// 						</div>
//                         {moneyChange === 1 && (
//                             <input
//                                 type="number"
//                                 className="input-text"
//                                 placeholder="Digite um valor..."
//                             />
//                         )}
// 					</div>
// 				)}
// 			</div>
// 		</>
// 	);
// };

// export default InfoCLient;

import { Label } from "@/components/ui/label";
import {
	PAYMENT_METHOD,
	SENDING_METHOD,
	MONEY_CHANGE_ITEMS,
} from "@/constants/infoOrder";

const InfoClient = ({
	setFormData,
	formData,
}: {
	setFormData: (data: {
		name: string;
		address: string;
		reference: string;
		sendingMethod: number | null;
		paymentMethod: number | null;
		moneyChange: number | null;
		changeAmount: number | null;
	}) => void;
	formData: {
		name: string;
		address: string;
		reference: string;
		sendingMethod: number | null;
		paymentMethod: number | null;
		moneyChange: number | null;
		changeAmount: number | null;
	};
}) => {
	const handleInputChange = (key: string, value: string | number | null) => {
		setFormData({
			...formData,
			[key]: value,
		});
	};

	return (
		<>
			<div>
				<h2>Nome e Sobrenome</h2>
				<input
					type="text"
					className="input-text"
					placeholder="Digite um nome e sobrenome..."
					value={formData.name}
					onChange={(e) => handleInputChange("name", e.target.value)}
				/>
			</div>
			<div className="send-method">
				<h2>Envio</h2>
				<div className="flex justify-between">
					{SENDING_METHOD.map((item) => (
						<div
							key={item.key}
							className="flex items-center flex-grow space-x-2"
						>
							<input
								type="radio"
								id={item.id}
								checked={formData.sendingMethod === item.key}
								onChange={() => handleInputChange("sendingMethod", item.key)}
							/>
							<Label htmlFor={item.id}>{item.name}</Label>
						</div>
					))}
				</div>
			</div>
			{formData.sendingMethod === 2 && (
				<>
					<div className="address">
						<h2>Endereço</h2>
						<input
							type="text"
							className="input-text"
							placeholder="Digite seu endereço completo..."
							value={formData.address}
							onChange={(e) => handleInputChange("address", e.target.value)}
						/>
					</div>
					<div className="reference">
						<h2>Ponto de Referência</h2>
						<input
							type="text"
							className="input-text"
							placeholder="Digite um ou mais pontos de referência..."
							value={formData.reference}
							onChange={(e) => handleInputChange("reference", e.target.value)}
						/>
					</div>
				</>
			)}
			<div className="payment-method">
				<h2>Pagamento</h2>
				<div className="flex flex-col gap-3">
					{PAYMENT_METHOD.map((item) => (
						<div key={item.key} className="flex items-center space-x-2">
							<input
								type="radio"
								id={item.id}
								checked={formData.paymentMethod === item.key}
								onChange={() => handleInputChange("paymentMethod", item.key)}
							/>
							<Label htmlFor={item.id}>{item.name}</Label>
						</div>
					))}
				</div>
				{formData.paymentMethod === 4 && (
					<div className="money-change">
						<span>Precisa de troco?</span>
						<div className="flex justify-between">
							{MONEY_CHANGE_ITEMS.map((item) => (
								<div
									key={item.key}
									className="flex items-center flex-grow space-x-2"
								>
									<input
										type="radio"
										id={item.id}
										checked={formData.moneyChange === item.key}
										onChange={() => handleInputChange("moneyChange", item.key)}
									/>
									<Label htmlFor={item.id}>{item.name}</Label>
								</div>
							))}
						</div>
						{formData.moneyChange === 1 && (
							<input
								type="number"
								className="input-text"
								placeholder="Digite um valor..."
								value={formData.changeAmount ?? ""}
								onChange={(e) =>
									handleInputChange("changeAmount", parseFloat(e.target.value))
								}
							/>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default InfoClient;

