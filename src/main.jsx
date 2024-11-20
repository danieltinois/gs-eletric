import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, Route } from "react-router-dom"; 
import { Home } from "./pages/Home";
import RewardsPage from "./pages/Rewards";

import "./styles/Global.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Home /> */}
    <RewardsPage />

  </StrictMode>
);
