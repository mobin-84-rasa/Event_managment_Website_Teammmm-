import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RoleSection from "./components/RoleSection";
import EventSection from "./components/EventSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import AllEventsPage from "./components/AllEventsPage";
import EventDetailsPage from "./components/EventDetailsPage";

import "@raha.group/persian-fonts";

function App() {
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const openRoleSection = () => setIsRoleOpen(true);
  const closeRoleSection = () => setIsRoleOpen(false);

  return (
    <Router>
      <Routes>
        {/* مسیر صفحه اصلی */}
        <Route path="/" element={
          <div className="w-full min-h-screen bg-gradient-to-b from-white to-indigo-50">
            <Header onGetStarted={openRoleSection} />
            <HeroSection onPlanEvent={openRoleSection} />
            <RoleSection isOpen={isRoleOpen} onClose={closeRoleSection} />
            <EventSection />
            <FeaturesSection />
            <Footer />
          </div>
        } />

        {/* مسیر صفحه همه رویدادها */}
        <Route path="/events" element={<AllEventsPage />} />
          {/* 🔥 جزئیات رویداد */}
        <Route path="/event/:id" element={<EventDetailsPage />} />

        {/* مسیر صفحه لاگین */}
        <Route path="/login" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">صفحه لاگین</h1>
              <p className="text-gray-600">این صفحه در حال توسعه است.</p>
            </div>
          </div>
        } />

        {/* مسیر صفحه ثبت‌نام */}
        <Route path="/register" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">صفحه ثبت‌نام</h1>
              <p className="text-gray-600">این صفحه در حال توسعه است.</p>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
