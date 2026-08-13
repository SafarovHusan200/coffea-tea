"use client";

export default function Error({ reset }) {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-50">
        Что-то пошло не так
      </h1>
      <p className="text-stone-600 dark:text-stone-400">
        Не удалось загрузить страницу. Попробуйте ещё раз.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700 dark:bg-white dark:text-stone-900"
      >
        Повторить
      </button>
    </div>
  );
}
