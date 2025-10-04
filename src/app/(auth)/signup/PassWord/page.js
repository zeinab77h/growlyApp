"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import Button from "@/components/Button";
import PassInput from "@/components/inputs/PassInput";
import NumInput from "@/components/inputs/NumInput";

export default function SignupPasswordPage() {
  const router = useRouter();
  const search = useSearchParams();

  // دریافت شماره موبایل از URL
  const initialPhone = useMemo(() => search.get("phone") || "", [search]);

  // state ها
  const [phone, setPhone] = useState(initialPhone);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!phone || !password || !confirmPassword) return;
    
    // چک کردن تطابق رمز عبور و تایید آن
    if (password !== confirmPassword) {
      alert("رمز عبور و تایید آن یکسان نیستند");
      return;
    }

    // TODO: API برای تکمیل ثبت نام
    console.log("Completing signup for:", phone, "Password:", password);

    // بعد از موفقیت، به داشبورد می‌رویم
    router.push("/dashboard");
  }

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6 py-6 overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            رمز عبور خودت رو انتخاب کن
          </h1>
        </div>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* شماره موبایل به صورت پر شده از همون اول */}
          <NumInput
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            onEdit={() => router.push("/login")}
          />

          <PassInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
          />

          <PassInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="تایید رمز عبور"
          />

          <Button type="submit">تکمیل ثبت نام</Button>
        </form>
      </div>
    </div>
  );
}
