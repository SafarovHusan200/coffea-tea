import Link from "next/link";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }) {
  const hasDiscount =
    product.old_price && Number(product.old_price) > Number(product.price);

  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col">
      <div className="relative mb-3.5 aspect-square overflow-hidden rounded-xl bg-[repeating-linear-gradient(135deg,#E4D8C4,#E4D8C4_16px,#DFD0B8_16px,#DFD0B8_32px)] transition-transform duration-200 group-hover:-translate-y-1">
        {product.main_image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.main_image}
            alt={product.title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {product.category_name && (
          <span className="absolute left-3 top-3 rounded-full bg-[#211C15]/72 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {product.category_name}
          </span>
        )}
        {!product.is_available && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            Нет в наличии
          </span>
        )}
      </div>
      <div className="font-serif text-lg leading-tight text-[#211C15]">
        {product.title}
      </div>
      <div className="mt-2 flex items-center gap-2 text-[15px] font-bold text-[#211C15]">
        {formatPrice(product.price)}
        {hasDiscount && (
          <span className="text-sm font-normal text-[#8A6A4A] line-through">
            {formatPrice(product.old_price)}
          </span>
        )}
      </div>
    </Link>
  );
}
