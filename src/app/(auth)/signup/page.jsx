export const metadata = {
  title: "Signup | Growly",
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow rounded p-6">
      <h1 className="text-xl font-semibold mb-4">ثبت نام</h1>
      <form className="flex flex-col gap-3">
        <input className="border rounded px-3 py-2" type="text" placeholder="نام" />
        <input className="border rounded px-3 py-2" type="email" placeholder="ایمیل" />
        <input className="border rounded px-3 py-2" type="password" placeholder="رمز عبور" />
        <button className="bg-black text-white rounded px-3 py-2">ثبت نام</button>
      </form>
    </div>
  );
}


