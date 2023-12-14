import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LogIn from "./comps/Login";
import { Register } from "./comps/Register";
import Profile from "./comps/Profile";
import Setup from "./comps/Setup";

function App() {
  return (
    <>
      <div>
        <div className="HeaderBox">
          <p className="BisonAdvisor">Bison Advisor</p>
        </div>
        WELCOME
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
