"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const metadata = {
  title: "Login | Growly",
};

export default function LoginPhonePage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!phone) return;
    const normalized = phone.replace(/\D/g, "");
    router.push(`/login/password?phone=${encodeURIComponent(normalized)}`);
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-4">ورود</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border rounded px-3 py-2"
          type="tel"
          placeholder="شماره موبایل"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="bg-black text-white rounded px-3 py-2" type="submit">
          ادامه
        </button>
      </form>
    </div>
  );
}


