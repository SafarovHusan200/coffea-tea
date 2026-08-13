"use client";

import { useState } from "react";

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4.5 w-4.5"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4.5 w-4.5"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
      <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c6.5 0 10 7 10 7a13.16 13.16 0 0 1-2.29 3.36M6.61 6.61C4.13 8.14 2 12 2 12s3.5 7 10 7a10.94 10.94 0 0 0 4.16-.82" />
    </svg>
  );
}

export default function PasswordInput({
  name,
  placeholder,
  required,
  minLength,
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className={`w-full pr-11 ${className}`}
      />
      <button
        type="button"
        onClick={() => setVisible((isVisible) => !isVisible)}
        aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-[#8A6A4A] hover:text-[#211C15] focus:outline-none"
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}
