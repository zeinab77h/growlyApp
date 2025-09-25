"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const metadata = {
  title: "Enter Password | Growly",
};

export default function LoginPasswordPage() {
  const router = useRouter();
  const search = useSearchParams();
  const phone = search.get("phone") || "";
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!password) return;
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-2">ورود</h1>
      <p className="text-sm text-gray-600 mb-4">{phone && `شماره: ${phone}`}</p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border rounded px-3 py-2"
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white rounded px-3 py-2" type="submit">
          ورود
        </button>
      </form>
    </div>
  );
}


