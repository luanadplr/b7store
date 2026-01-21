"use client";

import { ProductItem } from "@/components/products/product-item";
import { data } from "@/data";
import { useState } from "react";
import { HiAdjustments } from "react-icons/hi";

export function ProductFilter() {
  const list = data.products;
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <>
      <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-3xl">
          <strong>{data.products.length}</strong>{" "}
          {data.products.length >= 1 ? "Produtos" : "Produto"}
        </h2>
        <div className="flex gap-5 md:mt-0 md:w-70">
          <select
            className="h-14 flex-1 cursor-pointer rounded-sm border border-gray-200 bg-white px-6 text-gray-500"
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          >
            <option>Ordenar por </option>
          </select>
          <button
            className="flex h-14 flex-1 cursor-pointer items-center justify-between rounded-sm border border-gray-200 bg-white px-6 text-gray-500 md:hidden"
            onClick={handleOpenFilter}
          >
            Filtrar <HiAdjustments />
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <div
          className={`${openFilter ? "block" : "hidden"} bg-red-100 md:block md:w-72`}
        >
          Filtro
        </div>
        <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">
          {list.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
