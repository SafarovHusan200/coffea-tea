import Link from "next/link";
import { getCategories, getProducts } from "@/lib/api";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteCategoryAction } from "../actions";

function pluralProducts(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
    return "товара";
  }
  return "товаров";
}

export default async function AdminCategoriesPage({ searchParams }) {
  const { q } = await searchParams;
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts({ limit: 100 }),
  ]);

  const query = (q ?? "").trim().toLowerCase();
  const filtered = query
    ? categories.filter((category) => category.name.toLowerCase().includes(query))
    : categories;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="font-serif text-[34px] text-[#211C15]">Категории</h1>
          <p className="mt-1.5 text-[13.5px] text-[#8A6A4A]">
            Группируйте кофе и чай в витрины для покупателей.
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
            href="/admin/categories/new"
            className="rounded-full bg-[#BE5B36] px-5.5 py-3 text-[13.5px] font-bold text-[#F5F0E6] hover:bg-[#a84e2d]"
          >
            + Новая категория
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#211C15]/10 bg-white">
        <div className="grid grid-cols-[2fr_1fr_0.9fr] gap-4 bg-[#F5F0E6] px-6 py-3.5 text-[11px] font-bold tracking-widest text-[#8A6A4A] uppercase">
          <span>Категория</span>
          <span>Товаров</span>
          <span className="text-right">Действия</span>
        </div>
        {filtered.length === 0 ? (
          <div className="px-6 py-13 text-center text-sm text-[#8A6A4A]">
            Ничего не найдено —{" "}
            <Link
              href="/admin/categories/new"
              className="font-semibold text-[#BE5B36]"
            >
              добавьте категорию
            </Link>
            .
          </div>
        ) : (
          filtered.map((category) => {
            const count = products.filter(
              (product) => product.category_name === category.name,
            ).length;
            return (
              <div
                key={category.id}
                className="grid grid-cols-[2fr_1fr_0.9fr] items-center gap-4 border-t border-[#211C15]/7 px-6 py-4 hover:bg-[#FBF8F1]"
              >
                <span className="font-serif text-lg">{category.name}</span>
                <span className="text-[13.5px] text-[#5A5245]">
                  {count} {pluralProducts(count)}
                </span>
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/categories/${category.slug}/edit`}
                    className="rounded-full border border-[#211C15]/16 px-3.5 py-1.5 text-xs font-semibold hover:border-[#211C15]"
                  >
                    Изменить
                  </Link>
                  <DeleteButton
                    action={deleteCategoryAction}
                    name="slug"
                    value={category.slug}
                    title="Удалить категорию?"
                    confirmText={`«${category.name}» будет удалена без возможности восстановления.`}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
