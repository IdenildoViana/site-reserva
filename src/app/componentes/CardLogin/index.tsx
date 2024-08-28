import { FormEvent, useState } from "react";

function CardLogin() {
  return (
    <div>
      <form className="flex flex-col gap-5 justify-center rounded-lg items-center mr-96 mb-80 mt-36 h-96 w-3/5 bg-blue-950">
        <p className="text-3xl  font-semibold">Login</p>

        <div className="flex flex-col">
          <span className=" text-neutral-400 text-2xl font-semibold">
            Email
          </span>
          <input
            type="email"
            placeholder="Insira seu email..."
            required
            className=" bg-slate-300 h-10 w-80 p-2 rounded-sm placeholder:text-lg"
          />
        </div>
        <div className="flex flex-col">
          <span className=" text-neutral-400 text-2xl font-semibold">
            Senha
          </span>
          <input
            type="text"
            placeholder="Digite sua sennha..."
            required
            className=" bg-slate-300 h-10 w-80 p-2 rounded-sm placeholder:text-lg"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#95C2FF] mt-5 h-10 w-32 text-xl rounded-md"
          >
            {" "}
            Entrar
          </button>
        </div>
        <button className="items-end">Cadastrar </button>
      </form>
    </div>
  );
}

export default CardLogin;
