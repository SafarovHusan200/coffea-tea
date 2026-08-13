"use client";

import { useEffect, useRef, useState } from "react";

export default function Select({ name, defaultValue, options }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0]?.value ?? "");
  const rootRef = useRef(null);

  useEffect(() => {
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const selected = options.find((option) => option.value === value);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border-[1.5px] border-[#211C15]/16 bg-white px-3.5 py-3 text-left focus:border-[#BE5B36] focus:ring-3 focus:ring-[#BE5B36]/14 focus:outline-none"
      >
        <span>{selected?.label}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 flex-none text-[#8A6A4A] transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5 10 12.5 15 7.5" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-[#211C15]/12 bg-white py-1 shadow-lg">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  setValue(option.value);
                  setOpen(false);
                }}
                className={`block w-full px-3.5 py-2.5 text-left text-sm focus:outline-none ${
                  option.value === value
                    ? "bg-[#BE5B36]/12 font-semibold text-[#BE5B36]"
                    : "text-[#211C15] hover:bg-[#F5F0E6] focus:bg-[#F5F0E6]"
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
