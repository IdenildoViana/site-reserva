import Auditorio from "../Auditorio";
import MiniAuditorio from "../MiniAuditorio";
function CardAuditorio() {
  return (
    <div className=" bg-white h-96 m-10 mt-32  rounded-lg">
      <p className="text-blue-950 text-4xl font-semibold ml-5 mt-10">
        Auditórios
      </p>
      <div className="flex justify-center mr-10">
        <Auditorio />
        <MiniAuditorio />
      </div>
    </div>
  );
}

export default CardAuditorio;
