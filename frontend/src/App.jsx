// App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import AppNavBar from "./components/AppNavbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./Pages/ResetPassword";
import Profile from "./pages/Profile";
import { useState } from "react";
import TeamPage from "./pages/TeamPage";
<<<<<<< Updated upstream
=======

//-------
import CognitiveTestPage from "./Pages/CognitiveTest";
import SpotOn from "./Pages/CognitiveGames/SpotOn"
>>>>>>> Stashed changes
// --------
import CommunityPage from "./Pages/CommunityAndPeerSupport/CommunityPage";

import CreateInterview from "./Pages/InterviewSection/CreateInterview";
import Feedback from "./Pages/InterviewSection/Feedback";
import Interview from "./Pages/InterviewSection/Interview";
import InterviewDashboard from "./Pages/InterviewSection/InterviewDashboard";

import Insightspage from "./Pages/IndustryInsightsPage/Insightspage";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="md:h-screen bg-purple-100">
      <BrowserRouter>
        <ToastContainer />
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;