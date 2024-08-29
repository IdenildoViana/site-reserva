import Infocentro from "../Infocentro";
import LabInformatica from "../LabInformatica";
import LabSistemas from "../LabSistemas";

function CardLab() {
  return (
    <div className=" bg-white h-3/5 w-3/5 m-10  rounded-lg items-center p-5 justify-between ">
      <p className="text-blue-950 text-4xl font-semibold ml-5 ">Laboratórios</p>
      <div className="flex p-10 justify-between mr-10">
        <Infocentro />
        <LabSistemas />
        <LabInformatica />
      </div>
    </div>
  );
}

export default CardLab;
