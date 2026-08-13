import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import { getCategories, getProducts } from "@/lib/api";
import AdminNav from "@/components/admin/AdminNav";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminLayout({ children }) {
  if (!(await isLoggedIn())) redirect("/login");

  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts({ limit: 100 }),
  ]);
  const availableCount = products.filter((product) => product.is_available).length;
  const unavailableCount = products.length - availableCount;

  return (
    <div className="flex min-h-full flex-1 bg-[#F5F0E6] text-[#211C15]">
      <aside className="sticky top-0 flex h-screen w-62 flex-none flex-col bg-[#211C15] px-4.5 py-6.5 text-[#EDE7D6]">
        <div className="px-2.5 pb-1 font-serif text-xl italic">Кофе и Чай</div>
        <div className="px-2.5 pb-6.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#BE5B36]">
          Админ-панель
        </div>

        <AdminNav
          productCount={products.length}
          categoryCount={categories.length}
        />

        <div className="mt-auto border-t border-[#EDE7D6]/12 px-3 pt-4 text-xs leading-relaxed text-[#EDE7D6]/55">
          {availableCount} в наличии · {unavailableCount} нет в наличии
          <br />
          Изменения сохраняются сразу
          <div className="mt-3">
            <LogoutButton />
          </div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-6 py-7.5 sm:px-11">{children}</main>
    </div>
  );
}
