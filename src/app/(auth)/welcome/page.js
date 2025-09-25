"use client";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "Welcome | Growly",
};

export default function WelcomePage() {
  const router = useRouter();
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6 text-center">
      <h1 className="text-xl font-semibold mb-4">خوش آمدید به گراولی</h1>
      <p className="text-gray-600 mb-6">برای ادامه وارد شوید</p>
      <button
        className="bg-black text-white rounded px-4 py-2 w-full"
        onClick={() => router.push("/login")}
      >
        ادامه
      </button>
    </div>
  );
}


