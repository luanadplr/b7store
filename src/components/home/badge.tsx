import { Badge } from "@/types/Badge";
import Image from "next/image";

export function HomeBadge({ image, text, description }: Badge) {
  return (
    <div className="flex w-full items-center rounded-sm border border-gray-200 py-6 md:w-auto">
      <div className="border-r border-gray-200 px-10">
        <Image src={image} alt={text} width={30} height={30} />
      </div>
      <div className="flex-2 px-8">
        <h2 className="text-xl font-bold">{text}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
