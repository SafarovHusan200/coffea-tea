import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#211C15]/10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-6 py-14">
        <div className="max-w-xs">
          <div className="mb-3 font-serif text-lg italic text-[#211C15]">
            Кофе и Чай
          </div>
          <p className="text-sm leading-relaxed text-[#5A5245]">
            Небольшая обжарочная и чайная лавка. Розница и опт.
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A6A4A]">
              Магазин
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#5A5245]">
              <Link href="/#categories" className="hover:text-[#211C15]">
                Категории
              </Link>
              <Link href="/#featured" className="hover:text-[#211C15]">
                Хиты продаж
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A6A4A]">
              Контакты
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#5A5245]">
              <span>hello@coffeeandtea.example</span>
              <span>+00 000 000 000</span>
              <span>Пн–Сб, 9–18</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between border-t border-[#211C15]/10 px-6 py-5 text-xs text-[#8A6A4A]">
        <span>© {new Date().getFullYear()} Кофе и Чай</span>
        <span>Обжарочная и чайная лавка</span>
      </div>
    </footer>
  );
}
