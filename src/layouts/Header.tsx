import Logo from "@/assets/images/logo.svg";
import Menu from "@/components/menu";
const Header = () => {
	return (
		<div className="header fixed z-50 top-[-1px] border-b border-gray-25opacity bg-gray-light h-20">
			<img src={Logo} alt="Logo" />
            <Menu />
		</div>
	);
};

export default Header;
