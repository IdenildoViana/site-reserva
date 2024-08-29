import Sala1 from "../Sala1";
import Sala2 from "../Sala2";
import Sala3 from "../Sala3";

function CardSalas() {
  return (
    <div className=" bg-white  w-3/5 mt-32 rounded-lg items-center p-5  justify-between ">
      <p className="text-blue-950 text-4xl font-semibold ml-5 ">Salas</p>
      <div className="flex p-10 justify-between mr-10">
        <Sala1 />
        <Sala2 />
        <Sala3 />
      </div>
    </div>
  );
}

export default CardSalas;
