import React, { useState } from "react";

export default function SidebarForm() {
  const [expanded, setExpanded] = useState(true);
  const clickHandler = () => setExpanded((makeOpen) => !makeOpen);
  return (
    <div
      style={{ background: "#374151" }}
      className={` text-white h-screen pt-5 transition-all duration-300 ${
        expanded ? "w-[275px] px-5" : "w-0 px-0"
      }`}
    >
      <ul
        className={`[&>*]:flex space-y-6  [&>img]:ml-10 border-b-2 border-gray-600 [&>li:hover]:bg-slate-400 [&>li:hover]:transition-all [&>li:hover]:delay-75`}
      >
        <li>
          <img src="/icons/document-report (1).png" className={`overflow-hidden transition-all ${expanded ? 'w-6 ml-2' : 'w-0'}`} />
          <span className={`overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>خانه</span>
        </li>
        <li>
          <img src="/icons/chart-pie.png" className={`overflow-hidden transition-all ${expanded ? 'w-6 ml-2' : 'w-0'}`}/>
          <span className={`overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>گزارش</span>
        </li>
        <li>
          <img src="/icons/inbox-in.png" className={`overflow-hidden transition-all ${expanded ? 'w-6 ml-2' : 'w-0'}`} />
          <span className={`overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>انتقال وجه</span>
        </li>

        <li className="flex justify-between items-center">
          {" "}
          <span className="flex ">
            {" "}
            <img src="/icons/shopping-bag.png" className={`overflow-hidden transition-all ${expanded ? 'w-6 ml-2' : 'w-0'}`} />
            <span className={`overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>تنظیمات </span>
          </span>
          <img src="/icons/chevron-up.png" className="ml-2" />
        </li>
        
        <li className="mr-8 invisible">مسدود سازی</li>
        <li className="mr-8 pb-8 invisible">تغییر رمز اولیه ورود</li>
      </ul>

      <button onClick={clickHandler}>click</button>
    </div>
  );
}
