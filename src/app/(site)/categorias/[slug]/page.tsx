import { ProductFilter } from "@/components/categoria/product-filter";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  // const filters = await searchParams;
  // console.log(filters); // categorias/camisa?orders=selling&tech=node

  return (
    <section>
      <div className="text-sm text-gray-500">
        <Link href={"/"}>Home</Link> &gt; {slug.toUpperCase()}
      </div>
      <ProductFilter />
    </section>
  );
}
