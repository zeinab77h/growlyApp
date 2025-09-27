import Button from "../../../components/Button";

export const metadata = {
  title: "Signup | Growly",
};

export default function SignupPage() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center px-4 py-4 overflow-hidden">
      <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-xl p-5">
        <h1 className="text-lg font-semibold mb-4 text-center">ثبت نام</h1>
        <form className="flex flex-col gap-3">
          <input 
            className="border-2 border-gray-200 rounded-xl px-3 py-3 text-base focus:border-growly-green focus:outline-none transition-colors" 
            type="text" 
            placeholder="نام" 
          />
          <input 
            className="border-2 border-gray-200 rounded-xl px-3 py-3 text-base focus:border-growly-green focus:outline-none transition-colors" 
            type="email" 
            placeholder="ایمیل" 
            inputMode="email"
          />
          <input 
            className="border-2 border-gray-200 rounded-xl px-3 py-3 text-base focus:border-growly-green focus:outline-none transition-colors" 
            type="password" 
            placeholder="رمز عبور" 
          />
          <Button>
            ثبت نام
          </Button>
        </form>
      </div>
    </div>
  );
}


