import { data } from "@/data";
import { ProductList } from "./products-list";

export async function MostSold() {
  return (
    <div className="mt-10 text-center md:text-justify">
      <h2 className="text-lg font-bold">Produtos mais vendidos</h2>
      <p className="text-gray-500">Campeões de vendas da nossa loja.</p>
      {/* PRODUTOS  */}
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
}
