import React, { Suspense } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Container from "./Container";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom"; // To render child routes
import DashboardLayout from "./LayOuts/DashboardLayouts/Components/DashboardLayout";

import { PrivateRoutes } from "./Routes/PrivateRoutes";

const App = ({ children }) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            {PrivateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
