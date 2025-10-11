import SleekStepper from "@/components/SleekStepper";

export const metadata = {
  title: "Field | Growly",
};

export default function FieldPage() {
  return (
    <div className="h-screen bg-white flex flex-col px-6 py-30">
    <div className="flex flex-col flex-1 max-w-sm w-full">
    <SleekStepper current={1} steps={3} logoSrc="/logo.png" />
      <div className="text-center mb-8">
        <h1 className="text-2xl font-medium text-foreground mb-2 mt-10">
        می‌خوای تو چه زمینه‌ای 
        <br />
        آموزش ببینی؟
        </h1>
        <p className="color-growly-gray text-base">این فقط یک نقطه شروعه. انتخابت، محدودیتی در 
استفاده از منابع ایجاد نمی‌کنه.
</p>
      </div>
    </div>
  </div>
  );
}


