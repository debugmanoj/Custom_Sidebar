import React, { Children } from "react";
import Container from "../../../Container";
import DashboardSideBar from "./DashboardSideBar";
import DashboardNavBar from "./DashboardNavBar";
import { Outlet } from "react-router-dom";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const DashboardLayout = ({ Children }) => {
  const screens = useBreakpoint(); // This hook provides an object containing booleans for each breakpoint

  if (screens.xs) {
    // Extra small screen (mobile)
    console.log("Mobile view");
  }

  if (screens.md) {
    // Medium screen (tablet or small desktop)
    console.log("Tablet or small desktop view");
  }

  if (screens.lg) {
    // Large screen (desktop)
    console.log("Desktop view");
  }

  return (
    <>
      {screens.xs ? (

         <Container mobile={true}>
         
            <DashboardNavBar />
          <main className="max-h-screen overflow-y-hidden w-full pt-1 pl-2 pr-8 pb-6">
            <Outlet />
          </main>
          <DashboardSideBar mobile={true}/>
        </Container>




      ) : screens.md ? (
        <Container mobile={false}>
          <DashboardSideBar />
          <main className="max-h-screen overflow-y-hidden w-full pt-0 pl-0 pr-0 pb-6">
            <DashboardNavBar />
            <Outlet />
          </main>
        </Container>
      ) : (
        <Container mobile={false}>
          <DashboardSideBar />
          <main className="max-h-screen overflow-y-hidden w-full pt-1 pl-2 pr-8 pb-6">
            <DashboardNavBar />
            <Outlet />
          </main>
        </Container>
      )}
    </>
  );
};

export default DashboardLayout;
