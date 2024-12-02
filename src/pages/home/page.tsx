import Logo from "@/assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div className="home flex">
			<img src={Logo} alt="Logo" />
			<div className="menu">
				<NavLink to="/pedido" className="button button-1 button-color">
					Iniciar pedido
				</NavLink>
				<NavLink to="/instrucoes" className="button button-1 button-color">
					Instruções
				</NavLink>
			</div>
		</div>
	);
};

export default Home;
