import { useContext, useEffect, useState } from "react";
import { SelectedItemsContext } from "@/context/selectedItemsContext";
import { SelectedItemsProvider } from "@/context/selectedItemsProvider";

import Quantity from "./components/quantity";
import Flavor from "./components/flavors";
import InfoCLient from "./components/infoClient";
import Footer from "./components/Footer";
import { PAYMENT_METHOD } from "@/constants/infoOrder";
import { isStoredOpened } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const currentTime = isStoredOpened();
    const navigate = useNavigate();

	const { selectedItems } = useContext(SelectedItemsContext);

	const [flavorData, setFlavorData] = useState({
		selectedItems: [] as string[],
		radioSelected: null as string | null,
		quantities: {} as { [key: string]: number },
	});

	const [clientInfo, setClientInfo] = useState({
		name: "",
		address: "",
		reference: "",
		sendingMethod: null as number | null,
		paymentMethod: null as number | null,
		moneyChange: null as number | null,
		changeAmount: null as number | null,
	});

	const handleSendOrder = () => {
		const deliveryFee = 5; // Valor da taxa de entrega
		const isDelivery = clientInfo.sendingMethod === 2;

		// Detalhes das quantidades
		const quantityDetails =
			selectedItems.map((item) => `Quantidade: ${item.value}`).join("\n") +
			"\n";

		// Detalhes dos sabores
		const flavorDetails = flavorData.radioSelected
			? `Sabores:\n- ${flavorData.radioSelected}\n`
			: `Sabores e Quantidades:\n${flavorData.selectedItems
					.map((flavorName) => {
						const quantity = flavorData.quantities[flavorName] || 0;
						return `- ${flavorName} - ${quantity}`;
					})
					.join("\n")}\n`;

		// Detalhes do cliente
		const clientDetails = `
        *Nome:* ${clientInfo.name}
        *Entrega ou retirada:* ${isDelivery ? "Entrega" : "Retirada"}
        ${
            isDelivery
            ? `*Endereço:* ${clientInfo.address}
            *Ponto de referência:* ${clientInfo.reference}`
            : ""
        }
        *Método de pagamento:* ${
                    PAYMENT_METHOD.find((item) => item.key === clientInfo.paymentMethod)?.name
                }\n
        ${
            clientInfo.paymentMethod === 4
                ? `Precisa de troco? ${clientInfo.moneyChange === 1 ? "Sim" : "Não"}`
                : ""
        }
        `;

		// Cálculo do total
		const totalAmount = selectedItems.reduce(
			(sum, item) => sum + item.price,
			0
		);
		const totalWithDelivery = isDelivery
			? totalAmount + deliveryFee
			: totalAmount;

		const totalDetails = `Total do pedido: R$ ${totalWithDelivery.toFixed(2)}`;

		// Montagem da mensagem
		const message = `*Detalhes do Pedido:*\n${quantityDetails}${flavorDetails}${clientDetails}\n\n${totalDetails}`;

		// Envio via WhatsApp
		const whatsappUrl = `https://wa.me/5544998445387?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
	};


    useEffect(() => {
        if (currentTime === false) {
            navigate("/closed")
        }
    }, [currentTime])

	return (
		<SelectedItemsProvider>
			<div className="flex flex-col gap-4 mt-24 pb-[88px]">
				<div className="box">
					<h1 className="title">Etapa 1</h1>
					<div className="flex flex-col gap-8">
						<Quantity />
						<Flavor flavorData={flavorData} setFlavorData={setFlavorData} />
					</div>
				</div>
				<div className="box">
					<h1 className="title">Etapa 2</h1>
					<div className="flex flex-col gap-8">
						<InfoCLient setFormData={setClientInfo} formData={clientInfo} />
						<div className="send-order flex justify-center">
							<button className="btn" onClick={handleSendOrder}>
								Enviar Pedido
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</SelectedItemsProvider>
	);
};

export default Order;
