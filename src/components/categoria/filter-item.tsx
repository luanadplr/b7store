"use client";

import { useQueryString } from "@/hooks/use-querystring";

type Props = {
  groupId: string;
  item: {
    id: string;
    label: string;
  };
};

export function FilterItem({ groupId, item }: Props) {
  const querystring = useQueryString();

  const toogleFilter = (groupId: string, itemId: string) => {
    const queryGroup = querystring.get(groupId);
    let currentFilters = queryGroup ? queryGroup.split("-") : [];

    if (currentFilters.includes(item.id)) {
      currentFilters = currentFilters.filter((item) => item !== itemId);
    } else {
      currentFilters.push(itemId);
    }

    querystring.set(groupId, currentFilters.join("-"));
  };

  const hasFilter = (groupId: string, itemId: string) => {
    let currentFilters = querystring.get(groupId)?.split("-");
    return currentFilters && currentFilters.includes(itemId) ? true : false;
  };

  return (
    <ul className="px-4 pt-8">
      <li className="flex items-center gap-2">
        <input
          onChange={() => toogleFilter(groupId, item.id)}
          type="checkbox"
          id={`ck-${item.id}`}
          className="size-4"
          checked={hasFilter(groupId, item.id)}
        />
        <label htmlFor={`ck-${item.id}`} className="text-gray-500">
          {item.label}
        </label>
      </li>
    </ul>
  );
}
