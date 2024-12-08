import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

const Menu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MenuIcon />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link to="/">Início</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to="/pedido">Pedido</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to="/instrucoes">Instruções</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to="https://wa.me/message/7DPNLAV7S3YLO1">Fale Conosco</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
