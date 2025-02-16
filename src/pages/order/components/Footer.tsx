import { SelectedItemsContext } from "@/context/selectedItemsContext";
import { useContext } from "react";

interface FooterProps {
    deliveryFee: number;
}
const Footer = ({deliveryFee}: FooterProps) => {
	let { totalPrice } = useContext(SelectedItemsContext);

    if (deliveryFee){
        totalPrice += deliveryFee;
    }

	return (
		<footer className="footer fixed z-50 -bottom-2 bg-pink-75opacity border-t border-pink-dark">
			<h2>Total</h2>
			<h2>R$ {totalPrice.toFixed(2)}</h2>
		</footer>
	);
};

export default Footer;
