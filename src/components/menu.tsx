import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Menu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger><MenuIcon /></DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Início</DropdownMenuItem>
				<DropdownMenuItem>Pedido</DropdownMenuItem>
				<DropdownMenuItem>Instruções</DropdownMenuItem>
				<DropdownMenuItem>Fale Conosco</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
