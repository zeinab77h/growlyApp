"use client";

import { Autour_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";


export default function WelcomePage() {
  const router = useRouter();
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6 py-6 overflow-hidden">
      {/* Main content with dotted border */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm w-full">
        {/* Logo section */}
        <div className="flex flex-col items-center mb-4">
          <img src="/logo.png" alt="logo-3x" width={64} className="mb-2"/>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-medium text-black text-center mb-6 leading-[40px]">
          به گرولی خوش اومدی
        </h1>

        {/* Body text */}
        <p className="text-black font-medium text-center leading-[28px] text-base px-12 mb-15">
          طی مراحل پیش رو بهت میگیم که مسیر یادگیری تخصص هدفت رو از کجا شروع کنی و چطور تا انتها ادامه بدی
        </p>

        {/* Continue button */}
        <div className="w-full max-w-sm pb-4">
          <Button onClick={() => router.push("/login")}>
            ادامه
          </Button>
        </div>
      </div>

    </div>
  );
}


