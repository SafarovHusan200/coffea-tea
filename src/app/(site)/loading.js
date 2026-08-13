import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 pt-2">
        <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-3 w-48" />
            <Skeleton className="h-10 w-full max-w-sm" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="mt-2 h-4 w-full max-w-md" />
            <Skeleton className="h-4 w-2/3 max-w-md" />
            <div className="mt-4 flex gap-3.5">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
          </div>
          <Skeleton className="min-h-70 lg:min-h-115" />
        </div>
      </section>

      <section className="border-t border-[#211C15]/10">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <Skeleton className="mb-6 h-7 w-56" />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="aspect-4/3 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <Skeleton className="mb-6 h-7 w-40" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
