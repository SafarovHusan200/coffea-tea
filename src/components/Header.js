import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#211C15]/10 bg-[#F5F0E6]/90 backdrop-blur-md">
      <div className="mx-auto flex h-17.5 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icons/logo-brand.svg"
            alt="Кофе и Чай"
            width={52}
            height={52}
            className="h-13 w-13 object-contain"
            priority
          />
          <span className="font-serif text-xl italic tracking-tight text-[#211C15]">
            Кофе и Чай
          </span>
        </Link>
      </div>
    </header>
  );
}
