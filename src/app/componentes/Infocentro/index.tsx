import inforcentro from "../../../imagens/ifocentro.png";
function Infocentro() {
  return (
    <div className="bg-[#DDE9FF] h-72 w-64 rounded-2xl ml-20 mt-5 text-center ">
      <img
        src={inforcentro.src}
        alt="imagem da primeira sala disponível"
        className="scale-75"
      />
      <p className="text-blue-950 text-xl font-bold ">Local: Infocentro</p>
      <button className="bg-blue-950 h-10 w-32 rounded-2xl mt-2">
        {" "}
        Reservar{" "}
      </button>
    </div>
  );
}
export default Infocentro;
