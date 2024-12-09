import Logo from "@/assets/images/logo.svg";
import { isStoredOpened } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Home = () => {
    const currentTime = isStoredOpened();
  
    return (
        <div className="home flex">
            <img src={Logo} alt="Logo" />
            <div className="menu">
                <NavLink to="/pedido" className={`${!currentTime ? "pointer-events-none " : ""} button button-1 button-color`}>
                    {currentTime ? "Faça seu pedido" : "Fechado"}
                </NavLink>
                <NavLink to="/instrucoes" className="button button-1 button-color">
                    Instruções
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
