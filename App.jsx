import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RoleSection from "./components/RoleSection";
import EventSection from "./components/EventSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import "@raha.group/persian-fonts";


export default function App() {
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const openRoleSection = () => setIsRoleOpen(true);
  const closeRoleSection = () => setIsRoleOpen(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* هدر */}
      <Header
        onGetStarted={openRoleSection} // هدر هم مودال رو باز می‌کنه
      />

      {/* هرو سکشن */}
      <HeroSection onPlanEvent={openRoleSection} /> {/* دکمه Plan Your Event */}

      {/* مودال RoleSection */}
      <RoleSection isOpen={isRoleOpen} onClose={closeRoleSection} />

      {/* Event Section */}
      <EventSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
