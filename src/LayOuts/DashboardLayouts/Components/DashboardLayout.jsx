import React, { Children } from "react";
import Container from "../../../Container";
import DashboardSideBar from "./DashboardSideBar";
import DashboardNavBar from "./DashboardNavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({Children}) => {
  return (
    <>
      <Container>
        <DashboardSideBar />
        <main className="max-h-screen overflow-y-hidden w-full pt-1 pl-2 pr-8 pb-6">
          <DashboardNavBar />
          <Outlet /> {/* This is where the content of the child routes will be rendered */}
        </main>
      </Container>
    </>
  );
};

export default DashboardLayout;
