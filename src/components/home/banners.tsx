"use client";

import { Banner } from "@/types/Banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

let bannerTimer: NodeJS.Timeout;

export function Banners({ list }: { list: Banner[] }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const nextImage = () => {
    setCurrentBanner((currentBanner) => {
      if (currentBanner + 1 >= list.length) {
        return 0;
      } else {
        return currentBanner + 1;
      }
    });
  };

  useEffect(() => {
    bannerTimer = setInterval(nextImage, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  return (
    <div>
      <div className="relative aspect-3/1">
        {list.map((banner, index) => (
          <Link
            key={banner.img}
            href={banner.link}
            className="absolute inset-0 transition-all"
            style={{ opacity: currentBanner === index ? 1 : 0 }}
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-sm"
            />
          </Link>
        ))}
      </div>
      {/* Botão de Slider */}
      <div className="mt-5 flex flex-row items-center justify-center gap-8">
        {list.map((banner, index) => (
          <div
            key={index}
            className={`rounded-full ${currentBanner === index ? "r h-3 w-3 bg-gray-500" : "h-2.5 w-2.5 bg-gray-300"} cursor-pointer`}
            onClick={() => setCurrentBanner(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
