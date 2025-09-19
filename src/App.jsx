import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AISupport from "./pages/AISupport";
import Counselling from "./pages/Counselling";
import PeerSupport from "./pages/PeerSupport";
import AdminDashboard from "./pages/AdminDashboard";
import Resources from "./pages/Resources";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-support" element={<AISupport />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/peer-support" element={<PeerSupport />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;

