"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="bg-black p-4 text-center text-white">
        <strong>FRETE GRÁTIS</strong> para todo o Nordeste nas compras acima de
        R$199,00. <strong>APROVEITA!</strong>
      </div>
      <div className="mx-auto w-full max-w-6xl p-6">
        <div className="flex items-center justify-between">
          {/* Área da Logo */}
          <Image
            src={"/assets/ui/logo-black.png"}
            alt="B7Store"
            width={120}
            height={40}
          />
          {/* Área dos Botões */}
          <div className="">Botões</div>
        </div>
        {/* Área da Busca */}
      </div>
    </header>
  );
}
