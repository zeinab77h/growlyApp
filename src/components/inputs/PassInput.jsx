"use client";
import { useState } from "react";
import Input from "@/components/inputs/Input";

export default function PassInput({ value, onChange, placeholder = "Password" }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pr-12 text-left placeholder:text-left" // 👈 متن و placeholder چپ
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-400"
      >
        {show ? (
          // 👁 چشم باز
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.25 12S5.25 5.25 12 5.25 21.75 12 21.75 12 18.75 18.75 12 18.75 2.25 12 2.25 12z"
            />
            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          </svg>
        ) : (
          // 👁 چشم خط‌خورده
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 3l18 18M10.58 10.58A3 3 0 0113.42 13.42M6.18 6.18C4.31 7.49 3 9 3 12c0 0 3 6.75 9 6.75 2.06 0 3.83-.63 5.28-1.6M9.88 4.42C10.58 4.3 11.28 4.25 12 4.25 18 4.25 21 11 21 11c-.42.94-1.02 1.94-1.78 2.84"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
