"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navBase =
  "flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-[14.5px] font-semibold transition-colors";

export default function AdminNav({ productCount, categoryCount }) {
  const pathname = usePathname();
  const isCategories = pathname.startsWith("/admin/categories");
  const isProducts = !isCategories;

  return (
    <nav className="mb-1 flex flex-col gap-1">
      <Link
        href="/admin"
        className={`${navBase} ${
          isProducts
            ? "bg-[#BE5B36]/30 text-white"
            : "text-[#EDE7D6]/80 hover:bg-[#EDE7D6]/8"
        }`}
      >
        <span className="flex items-center gap-2.5">
          <span>☕</span>Товары
        </span>
        <span className="rounded-full bg-[#EDE7D6]/14 px-2.5 py-0.5 text-xs font-bold">
          {productCount}
        </span>
      </Link>
      <Link
        href="/admin/categories"
        className={`${navBase} ${
          isCategories
            ? "bg-[#BE5B36]/30 text-white"
            : "text-[#EDE7D6]/80 hover:bg-[#EDE7D6]/8"
        }`}
      >
        <span className="flex items-center gap-2.5">
          <span>🏷️</span>Категории
        </span>
        <span className="rounded-full bg-[#EDE7D6]/14 px-2.5 py-0.5 text-xs font-bold">
          {categoryCount}
        </span>
      </Link>
    </nav>
  );
}
