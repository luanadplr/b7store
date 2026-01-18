import { MenuItem } from "@/types/MenuItem";
import { InputBusca } from "./search";
import Link from "next/link";

export function MenuDesktop({ menu }: { menu: MenuItem[] }) {
  return (
    <div className="hidden flex-1 justify-between gap-6 px-4 md:flex">
      <ul className="flex items-center justify-center gap-6 whitespace-nowrap text-gray-500">
        {menu.map((item) => (
          <Link href={item.link} key={item.label}>
            <li key={item.label}>{item.label}</li>
          </Link>
        ))}
      </ul>
      <InputBusca />
    </div>
  );
}
