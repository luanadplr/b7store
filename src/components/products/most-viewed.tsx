// Criar uma lista para receber os produtos conforme a filtragem
// Receber apenas o titulo, descrição e a lista

import { data } from "@/data";
import { ProductList } from "./products-list";

export async function MostViewed() {
  return (
    <div className="mt-10 text-center md:text-justify">
      <h2 className="text-lg font-bold">Produtos mais vistos</h2>
      <p className="text-gray-500">Campeões de visualização da nossa loja.</p>
      {/* PRODUTOS  */}
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
}
