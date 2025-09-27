"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "../../../../components/Button";

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
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6 py-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            ورود
          </h1>
          <p className="text-gray-600 text-sm">
            {phone && `شماره: ${phone}`}
          </p>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="text-right">
            <label className="text-gray-700 text-sm font-medium block mb-2">
              رمز عبور خودت رو وارد کن
            </label>
            <input
              className="border-2 border-gray-200 rounded-xl px-4 py-4 text-base focus:border-growly-green focus:outline-none transition-colors w-full"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button type="submit">
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}


