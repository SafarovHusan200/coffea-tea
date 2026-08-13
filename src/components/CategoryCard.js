import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded-2xl bg-[#EFE7D6] p-6 transition-transform duration-200 hover:-translate-y-1"
    >
      {category.image_url && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.image_url}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#211C15]/60 via-[#211C15]/0 to-transparent" />
        </>
      )}
      <span
        className={`relative font-serif text-lg ${category.image_url ? "text-white" : "text-[#211C15]"}`}
      >
        {category.name}
      </span>
    </Link>
  );
}
