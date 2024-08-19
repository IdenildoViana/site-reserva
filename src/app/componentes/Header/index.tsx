import logo from "../../../imagens/Logo.png";
import { User } from "lucide-react";

function Header() {
  return (
    <div className="bg-[#00214D] flex justify-center items-center h-40 ">
      <img src={logo.src} alt="Logo mostrado no header" className="scale-50" />

      <div className="">
        <User color="white" size={54} />
      </div>
    </div>
  );
}
export default Header;
