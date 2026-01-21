"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    get: (atributo: string) => {
      return searchParams.get(atributo);
    },
    set: (atributo: string, valor: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (valor) {
        params.set(atributo, valor);
      } else {
        params.delete(atributo);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
  };
};
