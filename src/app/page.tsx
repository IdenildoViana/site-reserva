import CardLab from "./componentes/CardLab/inedex";
import CardSalas from "./componentes/CardSalas";
import Header from "./componentes/Header";
import CardAuditorio from "./componentes/CardAuditorio";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto mx-auto pb-12 items-center justify-center bg-[#ACB5D3] ">
      <Header />
      <div className=" flex flex-col gap-20 items-center ">
        <CardSalas />
        <CardLab />
        <CardAuditorio />
      </div>
    </main>
  );
}
