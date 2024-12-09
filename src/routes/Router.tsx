import Structor from "@/layouts/Structor";
import Closed from "@/pages/closed/page";
import Home from "@/pages/home/page";
import Order from "@/pages/order/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<Structor />}>
                    <Route path="/pedido" element={<Order />} /> 
                    <Route path="/closed" element={<Closed/>} />      
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
