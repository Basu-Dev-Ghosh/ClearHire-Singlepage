import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Main from "../../Components/Main/Main";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="page-body">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default MainPage;
