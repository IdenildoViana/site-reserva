import CardLab from "./componentes/CardLab/inedex";
import CardSalas from "./componentes/CardSalas";
import Header from "./componentes/Header";
import CardAuditorio from "./componentes/CardAuditorio";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto mx-auto pb-12 bg-[#ACB5D3] ">
      <Header />
      <div className=" ">
        <CardSalas />
        <CardLab />
        <CardAuditorio />
      </div>
    </main>
  );
}
