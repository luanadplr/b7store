import { MenuItem } from "@/types/MenuItem";
import Link from "next/link";
import Image from "next/image";

export function MenuMobile({ menu }: { menu: MenuItem[] }) {
  return (
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
  );
}
