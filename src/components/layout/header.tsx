"use client";

import Image from "next/image";
import { HeaderIcon } from "./header-icon";
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  link: string;
};

export function Header() {
  const menu: MenuItem[] = [
    { label: "Camisetas", link: "/categorias/camisetas" },
    { label: "Acessórios", link: "/categorias/acessorios" },
    { label: "Kits B7Web", link: "/categorias/kits" },
    { label: "Eletrônicos", link: "/categorias/eletronicos" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="bg-black p-4 text-center text-white">
        <strong>FRETE GRÁTIS</strong> para todo o Nordeste nas compras acima de
        R$199,00. <strong>APROVEITA!</strong>
      </div>
      <div className="mx-auto w-full max-w-6xl p-6">
        <div className="flex items-center justify-between">
          {/* Área da Logo */}
          <Link href={"/"}>
            <Image
              src={"/assets/ui/logo-black.png"}
              alt="B7Store"
              width={120}
              height={40}
            />
          </Link>
          {/* Área dos Botões */}
          <ul className="flex gap-4">
            <Link href={"/meus-pedidos"}>
              <HeaderIcon src={"/assets/ui/user-line.png"} alt="Usuário" />
            </Link>
            <Link href={"/carrinho"}>
              <HeaderIcon
                src={"/assets/ui/shopping-bag-4-line.png"}
                alt="Carrinho"
              />
            </Link>
            <div
              className={`cursor-pointer md:hidden`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <HeaderIcon
                src={"/assets/ui/menu-line.png"}
                alt="Menu"
                selected={openMenu}
                srcSelected={"/assets/ui/menu-line-white.png"}
              />
            </div>
          </ul>
        </div>
      </div>
      {/* Menu Mobile */}
      {openMenu && (
        <div className="md:hidden">
          <ul>
            {menu.map((item) => (
              <Link href={item.link} key={item.label}>
                <li className="flex items-center justify-between border-b border-gray-200 p-6 text-lg text-gray-500">
                  {item.label}
                  <Image
                    src={"/assets/ui/arrow-up-right.png"}
                    alt={`Ir a categoria ${item.label}`}
                    width={20}
                    height={20}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      {/* Área da Busca versão Mobile */}
      <div className="p-6 md:hidden">Busca Mobile ver.</div>
    </header>
  );
}
