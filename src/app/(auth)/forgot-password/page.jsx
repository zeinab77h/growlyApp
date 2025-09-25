export const metadata = {
  title: "Forgot Password | Growly",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-4">فراموشی رمز عبور</h1>
      <form className="flex flex-col gap-3">
        <input className="border rounded px-3 py-2" type="email" placeholder="ایمیل" />
        <button className="bg-black text-white rounded px-3 py-2">ارسال لینک بازیابی</button>
      </form>
    </div>
  );
}


