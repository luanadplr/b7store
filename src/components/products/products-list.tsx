import { Product } from "@/types/Product";
import { ProductItem } from "./product-item";

export function ProductList({ list }: { list: Product[] }) {
  return (
    <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-4">
      {list.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
}
