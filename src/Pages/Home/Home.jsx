import React from "react";
import Header from "../../Components/header/Header";
import SideBar from "../../Components/sidebar/SideBAr";
import ContainerTheme from "../../Layout/container/Container";

export default function Home() {
  return (
    <ContainerTheme>
      <Header />
      <SideBar />
    </ContainerTheme>
  );
}
