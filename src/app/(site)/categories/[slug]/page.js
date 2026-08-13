import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getCategory, getProducts } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return {};
  return { title: `${category.name} — Кофе и Чай` };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = await getCategory(slug);
  if (!category) notFound();

  const products = await getProducts({ categorySlug: slug, limit: 100 });

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-2">
        <Link href="/" className="text-sm text-[#8A6A4A] hover:text-[#211C15]">
          ← Все категории
        </Link>
        <h1 className="font-serif text-3xl text-[#211C15]">{category.name}</h1>
      </div>

      {products.length === 0 ? (
        <p className="text-[#5A5245]">В этой категории пока нет товаров.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
