"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import Button from "@/components/Button";
import PassInput from "@/components/inputs/PassInput";
import NumInput from "@/components/inputs/NumInput";

export default function LoginPasswordPage() {
  const router = useRouter();
  const search = useSearchParams();

  // شماره اولیه از آدرس میاد
  const initialPhone = useMemo(() => search.get("phone") || "", [search]);

  // state ها
  const [phone, setPhone] = useState(initialPhone);
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!phone || !password) return;
    // 🔗 اینجا بعداً API لاگین رو صدا می‌زنیم
    router.push("/field");
  }

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6 py-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            رمز عبور خودت رو وارد کن
          </h1>
        </div>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* 👇 شماره موبایل به صورت پر شده از همون اول */}
          <NumInput
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            onEdit={() => router.push("/login")}
          />

          <PassInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <Button type="submit">ورود</Button>
          <a
            href={`/forgot-password/OTP?phone=${encodeURIComponent(phone)}`}
            className="text-blue-600 text-sm text-center mt-2"
          >
            فراموشی رمز عبور
          </a>
        </form>
      </div>
    </div>
  );
}
