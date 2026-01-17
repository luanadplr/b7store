import Image from "next/image";

export function InputBusca() {
  return (
    <div className="flex w-full items-center gap-4 rounded-sm border border-gray-200 px-4 py-2">
      <Image src={"/assets/ui/search.png"} alt="Busca" width={20} height={20} />

      <input
        className="w-full p-1 outline-none"
        type="search"
        placeholder="O que você procura?"
      />
    </div>
  );
}
