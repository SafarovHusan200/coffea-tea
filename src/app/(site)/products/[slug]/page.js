import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";
import { formatPrice } from "@/lib/format";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} — Кофе и Чай`,
    description: product.description?.slice(0, 160),
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getProduct(slug);
  if (!product) notFound();

  const hasDiscount =
    product.old_price && Number(product.old_price) > Number(product.price);
  const images = product.images ?? [];
  const mainImage = images[0]?.image_url;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16">
      {product.category && (
        <Link
          href={`/categories/${product.category.slug}`}
          className="text-sm text-[#8A6A4A] hover:text-[#211C15]"
        >
          ← {product.category.name}
        </Link>
      )}

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="aspect-square overflow-hidden rounded-2xl bg-[repeating-linear-gradient(135deg,#E4D8C4,#E4D8C4_22px,#DFD0B8_22px,#DFD0B8_44px)]">
            {mainImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={mainImage}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto">
              {images.map((image) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={image.id}
                  src={image.image_url}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-3xl text-[#211C15]">{product.title}</h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#211C15]">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="text-lg text-[#8A6A4A] line-through">
                {formatPrice(product.old_price)}
              </span>
            )}
          </div>

          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
              product.is_available
                ? "bg-[#5F7A57]/15 text-[#5F7A57]"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.is_available ? "В наличии" : "Нет в наличии"}
          </span>

          {product.description && (
            <p className="whitespace-pre-line leading-relaxed text-[#5A5245]">
              {product.description}
            </p>
          )}

          <span className="text-xs text-[#8A6A4A]">Артикул: {product.sku}</span>
        </div>
      </div>
    </div>
  );
}
