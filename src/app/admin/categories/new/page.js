import { createCategoryAction } from "./actions";

export default async function NewCategoryPage({ searchParams }) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#BE5B36] uppercase">
        Добавить новую
      </div>
      <h1 className="mb-6 font-serif text-[27px] text-[#211C15]">
        Новая категория
      </h1>
      {error && (
        <p className="mb-4 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">
          Не удалось создать категорию. Возможно, название/ссылка уже
          используются.
        </p>
      )}
      <form action={createCategoryAction} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">
            Название категории
          </span>
          <input
            name="name"
            type="text"
            placeholder="например, Холодный кофе"
            required
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">
            Ссылка на изображение (необязательно)
          </span>
          <input
            name="image_url"
            type="url"
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </label>
        <div className="mt-2 flex justify-end gap-3">
          <a
            href="/admin/categories"
            className="rounded-full border-[1.5px] border-[#211C15]/20 px-5.5 py-3 text-[13.5px] font-semibold hover:border-[#211C15]"
          >
            Отмена
          </a>
          <button
            type="submit"
            className="rounded-full bg-[#211C15] px-6.5 py-3 text-[13.5px] font-bold text-[#F5F0E6] hover:bg-black"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
}
