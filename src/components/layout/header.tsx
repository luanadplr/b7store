"use client";

import Image from "next/image";
import { HeaderIcon } from "./header/menu-icon";
import Link from "next/link";
import { useState } from "react";
import { InputBusca } from "./header/search";
import { MenuItem } from "@/types/MenuItem";
import { MenuMobile } from "./header/menu-mobile";
import { MenuDesktop } from "./header/menu-desktop";
import { data } from "@/data";

export function Header() {
  const menu: MenuItem[] = data.menu;

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
              className="max-w-none"
            />
          </Link>
          {/* Menu Desktop */}
          <MenuDesktop menu={menu} />
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
      {openMenu && <MenuMobile menu={menu} />}
      {/* Área da Busca versão Mobile */}
      <div className={`px-6 pb-6 md:hidden ${openMenu && "pt-6"}`}>
        <InputBusca />
      </div>
    </header>
  );
}
