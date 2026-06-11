import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SplashScreen from "./pages/SplashScreen.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import AuthScreen from "./pages/AuthScreen.jsx";
import GuestScreen from "./pages/GuestScreen.jsx";
import HomePage from "./pages/HomePage.jsx";
import AssessmentPage from "./pages/AssessmentPage.jsx";
import FutureProfilePage from "./pages/FutureProfilePage.jsx";
import CareerMatchesPage from "./pages/CareerMatchesPage.jsx";
import CareerFitPage from "./pages/CareerFitPage.jsx";
import CareerRoadmapPage from "./pages/CareerRoadmapPage.jsx";
import CareerInsightsPage from "./pages/CareerInsightsPage.jsx";
import SkillGapAnalyzerPage from "./pages/SkillGapAnalyzerPage.jsx";
import FinalCareerReportPage from "./pages/FinalCareerReportPage.jsx";
import AskNexoraAI from "./components/AskNexoraAI.tsx";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <SplashScreen /> },
      { path: "welcome", element: <WelcomeScreen /> },
      { path: "login", element: <AuthScreen mode="login" /> },
      { path: "signup", element: <AuthScreen mode="signup" /> },
      { path: "guest", element: <GuestScreen /> },
      { path: "home", element: <HomePage /> },
      { path: "assessment/:flow", element: <AssessmentPage /> },
      { path: "future-profile/:flow", element: <FutureProfilePage /> },
      { path: "career-matches/:flow", element: <CareerMatchesPage /> },
      { path: "career-fit/:flow/:careerId", element: <CareerFitPage /> },
      { path: "career-roadmap/:flow/:careerId", element: <CareerRoadmapPage /> },
      { path: "career-insights/:flow/:careerId", element: <CareerInsightsPage /> },
      { path: "skill-gap-analyzer/:flow/:careerId", element: <SkillGapAnalyzerPage /> },
      { path: "final-career-report/:flow/:careerId", element: <FinalCareerReportPage /> },
      { path: "ask-nexora-ai", element: <AskNexoraAI /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
