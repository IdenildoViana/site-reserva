import miniAuditorio from "../../../imagens/sala 1.png";
function MiniAuditorio() {
  return (
    <div className="bg-[#DDE9FF] h-72 w-64 rounded-2xl ml-20 mt-5 text-center ">
      <img
        src={miniAuditorio.src}
        alt="imagem da primeira sala disponível"
        className="scale-75"
      />
      <p className="text-blue-950 text-xl font-bold ">Local: Mini Auditório</p>
      <button className="bg-blue-950 h-10 w-32 rounded-2xl mt-2">
        {" "}
        Reservar{" "}
      </button>
    </div>
  );
}
export default MiniAuditorio;
