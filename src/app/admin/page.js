import Link from "next/link";
import { getProducts } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProductAction } from "./actions";

export default async function AdminProductsPage({ searchParams }) {
  const { q } = await searchParams;
  const products = await getProducts({ limit: 100, search: q });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="font-serif text-[34px] text-[#211C15]">Товары</h1>
          <p className="mt-1.5 text-[13.5px] text-[#8A6A4A]">
            Всё, что есть в магазине — видно на сайте, если товар в наличии.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <form method="get" className="relative">
            <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-sm text-[#B4A98F]">
              ⌕
            </span>
            <input
              name="q"
              defaultValue={q ?? ""}
              placeholder="Поиск…"
              className="w-52 rounded-full border-[1.5px] border-[#211C15]/16 bg-white py-2.5 pr-3.5 pl-8.5 text-[13.5px] focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
            />
          </form>
          <Link
            href="/admin/products/new"
            className="rounded-full bg-[#BE5B36] px-5.5 py-3 text-[13.5px] font-bold text-[#F5F0E6] hover:bg-[#a84e2d]"
          >
            + Новый товар
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#211C15]/10 bg-white">
        <div className="grid grid-cols-[2.4fr_1.4fr_0.8fr_1fr_0.9fr] gap-4 bg-[#F5F0E6] px-6 py-3.5 text-[11px] font-bold tracking-widest text-[#8A6A4A] uppercase">
          <span>Товар</span>
          <span>Категория</span>
          <span>Цена</span>
          <span>Статус</span>
          <span className="text-right">Действия</span>
        </div>
        {products.length === 0 ? (
          <div className="px-6 py-13 text-center text-sm text-[#8A6A4A]">
            Ничего не найдено —{" "}
            <Link
              href="/admin/products/new"
              className="font-semibold text-[#BE5B36]"
            >
              добавьте товар
            </Link>
            .
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[2.4fr_1.4fr_0.8fr_1fr_0.9fr] items-center gap-4 border-t border-[#211C15]/7 px-6 py-4 hover:bg-[#FBF8F1]"
            >
              <span className="truncate font-serif text-lg">
                {product.title}
              </span>
              <span className="text-[13.5px] text-[#5A5245]">
                {product.category_name ?? "—"}
              </span>
              <span className="text-sm font-bold">
                {formatPrice(product.price)}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-[#5A5245]">
                <span
                  className={`h-2 w-2 flex-none rounded-full ${
                    product.is_available ? "bg-[#5F7A57]" : "bg-[#C7BCA3]"
                  }`}
                />
                {product.is_available ? "В наличии" : "Нет в наличии"}
              </span>
              <div className="flex justify-end gap-2">
                <Link
                  href={`/admin/products/${product.slug}/edit`}
                  className="rounded-full border border-[#211C15]/16 px-3.5 py-1.5 text-xs font-semibold hover:border-[#211C15]"
                >
                  Изменить
                </Link>
                <DeleteButton
                  action={deleteProductAction}
                  name="slug"
                  value={product.slug}
                  title="Удалить товар?"
                  confirmText={`«${product.title}» будет удалён без возможности восстановления.`}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
