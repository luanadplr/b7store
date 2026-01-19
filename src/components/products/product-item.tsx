"use client";

import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProductItem({ data }: { data: Product }) {
  const link = `/produto/${data.id}`;
  const [liked, setLiked] = useState(data.liked);

  return (
    <div className="rounded-sm border border-gray-200 bg-white p-6">
      <div className="flex justify-end">
        <div
          className={`flex size-12 cursor-pointer items-center justify-center rounded-sm border border-gray-200`}
          onClick={() => setLiked(!liked)}
        >
          <Image
            src={
              liked
                ? "/assets/ui/heart-3-fill.png"
                : "/assets/ui/heart-3-line.png"
            }
            alt={"Like"}
            width={24}
            height={24}
            className="size-6"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            quality={100}
            className="h-48 max-w-full"
          />
        </Link>
      </div>
      <div className="mt-9 text-justify">
        <Link href={link}>
          <h2 className="truncate font-medium">{data.label}</h2>
        </Link>
        <Link href={link}>
          <h3 className="mt-2 text-2xl font-bold text-blue-800">
            R$ {data.price.toFixed(2)}
          </h3>
        </Link>
        <p className="mt-3 text-sm text-gray-500">Em até 12x no cartão</p>
      </div>
    </div>
  );
}
