export const metadata = {
  title: "Auth | Growly",
};

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      {children}
    </div>
  );
}


