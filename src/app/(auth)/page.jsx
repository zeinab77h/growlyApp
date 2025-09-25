export const metadata = {
  title: "Login | Growly",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-4">ورود</h1>
      <form className="flex flex-col gap-3">
        <input className="border rounded px-3 py-2" type="email" placeholder="ایمیل" />
        <input className="border rounded px-3 py-2" type="password" placeholder="رمز عبور" />
        <button className="bg-black text-white rounded px-3 py-2">ورود</button>
      </form>
      <div className="flex justify-between mt-3 text-sm">
        <a className="text-blue-600" href="/forgot-password">فراموشی رمز عبور</a>
        <a className="text-blue-600" href="/signup">ثبت نام</a>
      </div>
    </div>
  );
}


