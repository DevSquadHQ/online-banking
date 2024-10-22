import React from "react";
import SideBarLi from "../sideBarLi/SideBarLi";
import SideBarUl from "../sideBarUl/SideBarUl";
import SideBarWhole from "../sideBarWhole/SideBarWhole";
export default function SidebarForm(props) {
  const { expanded } = props;

  return (
    <SideBarWhole expanded={expanded}>
      <SideBarUl>
        <SideBarLi
          src="/icons/svg/document-report.svg"
          liName={"خانه"}
          expanded={expanded}
        />
        <SideBarLi
          src="/icons/chart-pie.png"
          liName={"گزارش  "}
          expanded={expanded}
        />
        <SideBarLi
          src="/icons/inbox-in.png"
          liName={"انتقال وجه"}
          expanded={expanded}
        />
        <SideBarLi
          src="/icons/shopping-bag.png"
          liName={"تنظیمات"}
          expanded={expanded}
          srcIcon="/icons/chevron-up.png"
        />

        <li className="mr-8 invisible">مسدود سازی</li>
        <li className="mr-8 pb-8 invisible">تغییر رمز اولیه ورود</li>
      </SideBarUl>
    </SideBarWhole>
  );
}
