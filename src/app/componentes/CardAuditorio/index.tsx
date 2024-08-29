import Auditorio from "../Auditorio";
import MiniAuditorio from "../MiniAuditorio";
function CardAuditorio() {
  return (
    <div className=" bg-white h-3/5 w-3/5  p-5 rounded-lg">
      <p className="text-blue-950 text-4xl font-semibold ">Auditórios</p>
      <div className="flex p-10 justify-center ">
        <Auditorio />
        <MiniAuditorio />
      </div>
    </div>
  );
}

export default CardAuditorio;
