"use client";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { FilterItem } from "./filter-item";

type Props = {
  id: string;
  name: string;
};

export function FilterGroup({ id, name }: Props) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="mb-8">
      <div
        className="flex cursor-pointer items-center justify-between border-b border-gray-200 p-4 text-blue-600"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <h3 className="text-lg font-medium text-black">{name}</h3>
        {openFilter ? <LuChevronUp /> : <LuChevronDown />}
      </div>
      <div
        className={`overflow-y-hidden transition-all ${openFilter ? "max-h-96" : "max-h-0"}`}
      >
        <FilterItem groupId={id} item={{ id: "1", label: "React.js" }} />
        <FilterItem groupId={id} item={{ id: "2", label: "PHP" }} />
        <FilterItem groupId={id} item={{ id: "3", label: "Node.js" }} />
      </div>
    </div>
  );
}
