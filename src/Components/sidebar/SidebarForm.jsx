import React from "react";
import SideBarLi from "./sideBarLi/SideBarLi";
import SideBarUl from "./sideBarUl/SideBarUl";
import SideBarWhole from "./sideBarWhole/SideBarWhole";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PieChartIcon from '@mui/icons-material/PieChart';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SidebarForm(props) {
  const { expanded } = props;

  return (
    <SideBarWhole expanded={expanded}>
      <SideBarUl>
       
        <SideBarLi
          icon={<TextSnippetIcon/>}
          liName={"خانه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<PieChartIcon/>}
          liName={"گزارش  "}
          expanded={expanded}
        />
        <SideBarLi
          icon={<MoveToInboxIcon/>}
          liName={"انتقال وجه"}
          expanded={expanded}
        />
        <SideBarLi
          icon={<ShoppingBagIcon/>}
          liName={"تنظیمات"}
          expanded={expanded}
          // srcIcon="/icons/chevron-up.png"
          subIcon={<KeyboardArrowDownIcon/>}
        />

        <li className="mr-8 invisible">مسدود سازی</li>
        <li className="mr-8 pb-8 invisible">تغییر رمز اولیه ورود</li>
      </SideBarUl>
    </SideBarWhole>
  );
}
