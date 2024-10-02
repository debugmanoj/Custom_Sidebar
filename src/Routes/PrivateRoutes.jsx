import { lazy } from "react";

// Lazy loading components
const LazyOverview = lazy(() =>
  import("../Pages/PrivatePages/Dashboard/OverVIew") // Check the path here
);
const LazyTransactions = lazy(() =>
  import("../Pages/PrivatePages/Dashboard/Transactions") // Check the path here
);


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
];
