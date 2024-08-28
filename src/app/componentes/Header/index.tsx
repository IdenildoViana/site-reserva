import logo from "../../../imagens/Logo.png";
import { User } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#00214D] flex justify-between items-center h-40 ">
      <Link href="/">
        <img
          src={logo.src}
          alt="Logo mostrado no header"
          className="scale-50"
        />
      </Link>

      <div className="mr-28">
        <Link href="/Login">
          <User color="white" size={54} />
        </Link>
      </div>
    </div>
  );
}
export default Header;
