import { lazy } from "react";
import Sample from "../Pages/PrivatePages/Dashboard/Sample";

// Lazy loading components
const LazyOverview = lazy(() =>
  import("../Pages/PrivatePages/Dashboard/OverVIew") // Check the path here
);
const LazyTransactions = lazy(() =>
  import("../Pages/PrivatePages/Dashboard/Transactions") // Check the path here
);

const LazySample=lazy(()=>{
  import("../Pages/PrivatePages/Dashboard/Sample") // Check the path here
})


// Define the private routes with components
export const PrivateRoutes = [
  {
    path: "overview", // Remove leading slash to make it relative
    element: <LazyOverview />, // JSX element
  },
  {
    path: "transactions", // Remove leading slash to make it relative
    element: <LazyTransactions />, // JSX element
  },
  {
    path: "sample", // Remove leading slash to make it relative
    element: <Sample />, // JSX element
  },
];
