"use client";

import { useState } from "react";

export default function DeleteButton({
  action,
  name,
  value,
  title = "Удалить?",
  confirmText,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-[#BE5B36]/30 px-3 py-1.5 text-xs font-semibold text-[#BE5B36] hover:bg-[#BE5B36] hover:text-white"
      >
        ✕
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#211C15]/50 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-[#F5F0E6] p-7 text-[#211C15] shadow-2xl"
          >
            <h2 className="mb-2.5 font-serif text-2xl">{title}</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#5A5245]">
              {confirmText}
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border-[1.5px] border-[#211C15]/20 px-5 py-2.5 text-[13.5px] font-semibold hover:border-[#211C15]"
              >
                Отмена
              </button>
              <form action={action}>
                <input type="hidden" name={name} value={value} />
                <button
                  type="submit"
                  className="rounded-full bg-[#BE5B36] px-5.5 py-2.5 text-[13.5px] font-bold text-white hover:bg-[#a84e2d]"
                >
                  Удалить
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
