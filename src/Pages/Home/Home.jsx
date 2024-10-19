import React from "react";
import Header from "../../Components/header/Header";
import SideBar from "../../Components/sidebar/SideBAr";
import ContainerTheme from "../../Layout/container/Container";
import AccountOpening from "../../Components/accountOpening/accountOpening";

export default function Home() {
  return (
    <ContainerTheme>
      <Header />
      <AccountOpening />
      <SideBar />
    </ContainerTheme>
  );
}
