import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Beneficios from "../pages/Beneficios";
import { Historic } from "../pages/Historic";
import { LearnMore } from "../pages/LearnMore";
import { ScrollToTop } from "../components/scrollToTop/scrollToTop";
import RewardsPage from "../pages/Rewards";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/historico" element={<Historic />} />
        <Route path="/saiba-mais" element={<LearnMore />} />
        <Route path="/recompensas" element={<RewardsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
