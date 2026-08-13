import { getCategories } from "@/lib/api";
import Select from "@/components/admin/Select";
import { createProductAction } from "./actions";

export default async function NewProductPage({ searchParams }) {
  const { error } = await searchParams;
  const categories = await getCategories();

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#BE5B36] uppercase">
        Добавить новый
      </div>
      <h1 className="mb-6 font-serif text-[27px] text-[#211C15]">
        Новый товар
      </h1>
      {error && (
        <p className="mb-4 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">
          Не удалось создать товар. Проверьте обязательные поля (название,
          артикул, цена должны быть корректны и уникальны).
        </p>
      )}
      <form action={createProductAction} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">Название</span>
          <input
            name="title"
            type="text"
            placeholder="например, Colombia Huila"
            required
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">Артикул (SKU)</span>
          <input
            name="sku"
            type="text"
            required
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </label>
        <div className="flex gap-3.5">
          <div className="flex flex-1 flex-col gap-1.5 text-sm">
            <span className="font-semibold text-[#5A5245]">Категория</span>
            <Select
              name="category_id"
              defaultValue=""
              options={[
                { value: "", label: "— Нет —" },
                ...categories.map((category) => ({
                  value: String(category.id),
                  label: category.name,
                })),
              ]}
            />
          </div>
          <div className="flex flex-1 flex-col gap-1.5 text-sm">
            <span className="font-semibold text-[#5A5245]">Статус</span>
            <Select
              name="is_available"
              defaultValue="true"
              options={[
                { value: "true", label: "В наличии" },
                { value: "false", label: "Нет в наличии" },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-3.5">
          <label className="flex flex-1 flex-col gap-1.5 text-sm">
            <span className="font-semibold text-[#5A5245]">Цена</span>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="0.00"
              required
              className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1.5 text-sm">
            <span className="font-semibold text-[#5A5245]">
              Старая цена (для скидок)
            </span>
            <input
              name="old_price"
              type="number"
              step="0.01"
              min="0.01"
              className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">Описание</span>
          <textarea
            name="description"
            rows={3}
            placeholder="Вкус, происхождение, способ заваривания…"
            className="resize-y rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </label>
        <div className="flex flex-col gap-1.5 text-sm">
          <span className="font-semibold text-[#5A5245]">
            Изображение (необязательно)
          </span>
          <input
            name="image_file"
            type="file"
            accept="image/*"
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-2.5 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-[#211C15] file:px-3.5 file:py-1.5 file:text-xs file:font-semibold file:text-[#F5F0E6] hover:file:bg-black"
          />
          <span className="text-xs text-[#8A6A4A]">
            или вставьте ссылку на изображение
          </span>
          <input
            name="image_url"
            type="url"
            placeholder="https://…"
            className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
          />
        </div>
        <div className="mt-2 flex justify-end gap-3">
          <a
            href="/admin"
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
