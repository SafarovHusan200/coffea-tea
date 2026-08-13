import Link from "next/link";
import PasswordInput from "@/components/PasswordInput";
import { loginAction } from "./actions";

export default async function LoginPage({ searchParams }) {
  const { error, registered } = await searchParams;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-[#F5F0E6] px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="font-serif text-2xl italic text-[#211C15]">
            Кофе и Чай
          </div>
          <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#BE5B36]">
            Админ-панель
          </div>
        </div>

        <div className="rounded-2xl border border-[#211C15]/10 bg-white p-8 shadow-sm">
          <h1 className="mb-6 font-serif text-2xl text-[#211C15]">Вход</h1>

          {registered && (
            <p className="mb-4 rounded-lg bg-[#5F7A57]/12 px-3 py-2 text-sm text-[#5F7A57]">
              Аккаунт создан. Теперь можно войти.
            </p>
          )}
          {error && (
            <p className="mb-4 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">
              Неверное имя пользователя или пароль.
            </p>
          )}

          <form action={loginAction} className="flex flex-col gap-4">
            <input
              name="username"
              type="text"
              placeholder="Имя пользователя"
              required
              className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
            />
            <PasswordInput
              name="password"
              placeholder="Пароль"
              required
              className="rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-1 rounded-full bg-[#211C15] px-5 py-3 text-[13.5px] font-bold text-[#F5F0E6] hover:bg-black"
            >
              Войти
            </button>
          </form>
        </div>

        <Link
          href="/register"
          className="mt-6 block text-center text-sm text-[#8A6A4A] hover:text-[#211C15]"
        >
          Нет аккаунта? Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}
