import React from "react";
import SideBarLi from "./sideBarLi/SideBarLi";
import SideBarUl from "./sideBarUl/SideBarUl";
import SideBarWhole from "./sideBarWhole/SideBarWhole";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PieChartIcon from "@mui/icons-material/PieChart";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function SidebarForm(props) {
  const [arrowDown, setArrowDown] = useState(true);
  let arrowHandler = () => setArrowDown((upside) => !upside);
  console.log(arrowDown);

  const { expanded } = props;

  return (
    <SideBarWhole expanded={expanded}>
      <SideBarUl>
        <SideBarLi
          icon={<TextSnippetIcon />}
          liName={"خانه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<PieChartIcon />}
          liName={"گزارش  "}
          expanded={expanded}
        />
        <SideBarLi
          icon={<MoveToInboxIcon />}
          liName={"انتقال وجه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<ShoppingBagIcon />}
          liName={"تنظیمات"}
          expanded={expanded}
          subIcon={<KeyboardArrowDownIcon />}
          onClick={arrowHandler}
          className={arrowDown ? "rotate-0 text-white" : "rotate-180"}
        />

        {/* <div className={`border-b-2 border-gray-600 transition-all delay-100 ${arrowDown ? "[&>*]:opacity-100 max-h-48": "[&>*]:relative  [&>*]:bottom-44 max-h-0 opacity-0" }`}>
          <li className="mr-8 ">مسدود سازی</li>
          <li className="mr-8 pb-8 ">تغییر رمز اولیه ورود</li>
        </div> */}

        <div
          className={`border-b-2 border-gray-600 transition-all duration-300 ease-in-out flex flex-col space-y-6 pr-4 [&>li:hover]:text-gray-400 [&>li:hover]:transition-all [&>li:hover]:delay-100 ${
            arrowDown ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
        >
          <li
            className={`mr-8 transition-opacity duration-300 ease-in-out   ${
              arrowDown ? "opacity-100 " : "opacity-0"
            }`}
          >
            مسدود سازی
          </li>
          <li
            className={`mr-8 pb-8 transition-opacity duration-300 ease-in-out ${
              arrowDown ? "opacity-100" : "opacity-0"
            }`}
          >
            تغییر رمز اولیه ورود
          </li>
        </div>
      </SideBarUl>
    </SideBarWhole>
  );
}
