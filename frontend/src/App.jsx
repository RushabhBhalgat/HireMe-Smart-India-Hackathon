// App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import AppNavBar from "./components/AppNavbar";

import Login from "./pages/Login";

import LandingNavbar from "./components/LandingNavbar";

import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./Pages/ResetPassword";
import Profile from "./pages/Profile";
import { useState } from "react";
import TeamPage from "./pages/TeamPage";

import CommunityPage from "./Pages/CommunityAndPeerSupport/CommunityPage";

import CreateInterview from "./Pages/InterviewSection/CreateInterview";
import Feedback from "./Pages/InterviewSection/Feedback";
import Interview from "./Pages/InterviewSection/Interview";
import InterviewDashboard from "./Pages/InterviewSection/InterviewDashboard";

import Insightspage from "./Pages/IndustryInsightsPage/Insightspage";

import CognitiveTestPage from "./Pages/CognitiveTest";
import SpotOn from "./Pages/CognitiveGames/SpotOn";
import BrainSwitch from "./Pages/CognitiveGames/BrainSwitch";

import TechnicalTestPage from "./Pages/TechnicalTestPage";
import TechnicalTestInterface from "./Pages/TechnicalTestInterface";
import PersonalityAssessmentPage from "./Pages/PersonalityAssessmentPage";
import TechnicalTestResultPage from "./Pages/TechnicalTestResultPage";

import ChatBot from "./components/Chatbot/GeminiComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="md:h-screen bg-purple-100">
      <BrowserRouter>
        <ToastContainer />
        {/* <AppNavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        /> */}
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route
              path="register"
              exact
              element={
                <Register
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setName={setName}
                  setEmail={setEmail}
                />
              }
            />
            <Route
              path="login"
              exact
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setName={setName}
                  setEmail={setEmail}
                />
              }
            />
            <Route
              path="forgotPassword"
              exact
              element={<ForgotPassword isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="resetPassword"
              element={<ResetPassword isLoggedIn={isLoggedIn} />}
            />

            <Route
              path="profile"
              exact
              element={
                <Profile isLoggedIn={isLoggedIn} name={name} email={email} />
              }
            />
            <Route path="team" element={<TeamPage />} />

            <Route path="cognitiveTest" element={<CognitiveTestPage />} />
            <Route path="spotOn" element={<SpotOn />} />
            <Route path="brainSwitch" element={<BrainSwitch />} />

            {/* Direct Routes for Interview Pages */}
            <Route path="/create-interview" element={<CreateInterview />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/interview" element={<Interview />} />
            <Route
              path="/interview-dashboard"
              element={<InterviewDashboard />}
            />
            <Route
              path="/interview-dashboard"
              element={<InterviewDashboard />}
            />

            {/* Direct Routes for Interview Pages */}
            <Route path="/CommunityPage" element={<CommunityPage />} />

            {/* Direct Routes for Insights */}
            <Route path="/Insightspage" element={<Insightspage />} />

            <Route path="/technical-test" element={<TechnicalTestPage />} />
            <Route
              path="/attempt-tech-test"
              element={<TechnicalTestInterface />}
            />
            <Route
              path="personality-assessment"
              element={<PersonalityAssessmentPage />}
            />
            <Route
              path="technical-test-result"
              element={<TechnicalTestResultPage />}
            />
            <Route path="chatbot" element={<ChatBot />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
