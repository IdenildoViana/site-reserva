import CardLogin from "../componentes/CardLogin";
import TextLogin from "../componentes/TextLogin";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import Header from "../componentes/Header";

export default function Login() {
  return (
    <main className="h-screen overflow-y-auto mx-auto pb-12 bg-[#00214D] ">
      <Header />

      <div className="flex justify-between">
        <TextLogin />
        <CardLogin />
      </div>
    </main>
  );
}
