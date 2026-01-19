import { Badge } from "@/types/Badge";
import Image from "next/image";

export function HomeBadge({ image, text, description }: Badge) {
  return (
    <div className="flex flex-1 rounded-sm border border-gray-200 py-6">
      <div className="flex w-32 items-center justify-center border-r border-gray-200">
        <Image src={image} alt={text} width={40} height={40} />
      </div>
      <div className="flex-1 px-8">
        <h2 className="text-xl font-bold">{text}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
