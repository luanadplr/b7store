import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  selected?: boolean;
  srcSelected?: string;
};

export function HeaderIcon({ src, alt, selected, srcSelected }: Props) {
  return (
    <li
      className={`flex size-12 items-center justify-center rounded-sm border border-gray-200 ${selected ? "bg-blue-500" : "hover:bg-gray-100"}`}
    >
      <Image
        src={selected ? srcSelected! : src!}
        alt={alt}
        width={24}
        height={24}
        className="size-6"
      />
    </li>
  );
}
