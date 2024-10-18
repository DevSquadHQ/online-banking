import React from "react";

export default function SidebarForm() {
  return (
    <div
      style={{ background: "#374151" }}
      className="w-[275px] text-white h-screen px-5 pt-5"
    >
      <ul
        className="[&>*]:flex space-y-6  [&>img]:ml-10 border-b-2 border-gray-600"
        
      >
        <li>
          <img src="/icons/document-report (1).png" className="ml-2" />
          خانه
        </li>
        <li>
          <img src="/icons/chart-pie.png" className="ml-2" />
          گزارش
        </li>
        <li>
          <img src="/icons/inbox-in.png" className="ml-2" />
          انتقال وجه
        </li>

        <li className="flex justify-between items-center">
          {" "}
          <span className="flex ">
            {" "}
            <img src="/icons/shopping-bag.png" className="ml-2" />
            تنظیمات{" "}
          </span>
          <img src="/icons/chevron-up.png" className="ml-2" />
        </li>
        <li className="mr-8">مسدود سازی</li>
        <li className="mr-8 pb-8">تغییر رمز اولیه ورود</li>
      </ul>
    </div>
  );
}
