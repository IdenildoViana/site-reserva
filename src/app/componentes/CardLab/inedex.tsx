import Infocentro from "../Infocentro";
import LabInformatica from "../LabInformatica";
import LabSistemas from "../LabSistemas";

function CardLab() {
  return (
    <div className=" bg-white h-96 m-10 mt-32  rounded-lg items-center  justify-between ">
      <p className="text-blue-950 text-4xl font-semibold ml-5 ">Laboratórios</p>
      <div className="flex justify-between mr-10">
        <Infocentro />
        <LabSistemas />
        <LabInformatica />
      </div>
    </div>
  );
}

export default CardLab;
