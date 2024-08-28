import Sala1 from "../Sala1";
import Sala2 from "../Sala2";
import Sala3 from "../Sala3";
import Sala4 from "../Sala4";

function CardSalas() {
  return (
    <div className=" bg-white h-96 m-10 mt-32  rounded-lg items-center  justify-between ">
      <p className="text-blue-950 text-4xl font-semibold ml-5 ">Salas</p>
      <div className="flex justify-between mr-10">
        <Sala1 />
        <Sala2 />
        <Sala3 />
        <Sala4 />
      </div>
    </div>
  );
}

export default CardSalas;
