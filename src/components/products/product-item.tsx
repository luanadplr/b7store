import { Product } from "@/types/Product";

export function ProductItem({ data }: { data: Product }) {
  return <div>{data.label}</div>;
}
