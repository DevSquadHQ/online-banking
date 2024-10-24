import React from "react";

export default function SideBarUl(props) {
    const{children} = props
  return (
    <>
      <ul
        className={`[&>*]:flex [&>*]:cursor-pointer space-y-4  [&>img]:ml-10  [&>li:hover]:bg-slate-400 [&>li:hover]:transition-all [&>li:hover]:delay-100  [&>li]:p-3 [&>li:hover]:rounded-lg [&>li:hover>span>svg]:text-white [&>li:hover>span>svg]:delay-100`}
      >
        {children}
      </ul>
    </>
  );
}
