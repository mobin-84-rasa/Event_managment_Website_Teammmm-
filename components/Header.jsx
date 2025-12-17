import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX, FiCalendar, FiUsers, FiMapPin, FiInfo, FiMail, FiHome } from "react-icons/fi";

const Header = ({ onGetStarted, onEventClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "خانه", icon: FiHome },
    { name: "درباره ما", icon: FiInfo },
    { name: "رویدادها", icon: FiCalendar },
    { name: "شعبه‌ها", icon: FiMapPin },
    { name: "تماس با ما", icon: FiMail }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-pink-500/10 border-b border-white/20" style={{ fontFamily: "'Vazirmatn', 'Segoe UI', sans-serif" }}>
      {/* پس‌زمینه گرادینت متحرک */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5" />
      
      {/* ذرات شناور */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: [null, window.innerHeight + 20],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 relative">
        
        {/* لوگو با طراحی پیشرفته */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.1 }}
          className="flex items-center cursor-pointer group"
          dir="rtl"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl ml-3 shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-500"
          >
            <FiCalendar className="w-6 h-6" />
            {/* افکت درخشش */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <div className="flex flex-col text-right">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              ایونت‌فلو
            </span>
         
          </div>
        </motion.div>

        {/* نویگیشن دسکتاپ با موقعیت‌دهی اصلاح‌شده */}
        <nav className="hidden lg:flex items-center space-x-1" dir="rtl">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 120, damping: 20 }}
              className="relative"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.name === "رویدادها") onEventClick();
                }}
                className="relative flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium px-5 py-3 tracking-wide transition-all duration-300 group/nav"
                dir="rtl"
              >
                {item.name}
                {item.icon && <item.icon className="w-4 h-4 group-hover/nav:rotate-12 transition-transform" />}
                
                {/* افکت پس‌زمینه هاور - موقعیت‌دهی اصلاح‌شده */}
                <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-indigo-500/0 group-hover/nav:from-pink-500/5 group-hover/nav:via-purple-500/5 group-hover/nav:to-indigo-500/5 transition-all duration-300" />
              </a>
              
              {/* نشانگر پایینی - موقعیت‌دهی صحیح */}
              <span className="absolute bottom-1 right-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover/nav:w-3/4 group-hover/nav:right-1/4 transition-all duration-300 transform translate-x-1/2 rounded-full" />
              
              {/* نقاط شناور در هاور - موقعیت‌دهی اصلاح‌شده */}
              <div className="absolute -top-2 right-1/2 transform translate-x-1/2 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </nav>

        {/* سمت راست با CTA پیشرفته */}
        <div className="hidden md:flex items-center gap-3" dir="ltr">
          {/* دکمه CTA پیشرفته */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
            onClick={onGetStarted}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3.5 rounded-xl font-medium shadow-2xl shadow-pink-500/20 overflow-hidden group/cta"
          >
            {/* پس‌زمینه گرادینت متحرک */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
            
            {/* حاشیه متحرک */}
            <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/cta:border-white/30 transition-all duration-300" />
            
            {/* افکت درخشش */}
            <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* محتوا */}
            <span className="relative z-10 text-white font-semibold tracking-wide flex items-center gap-2">
              شروع کنید
              <FiUsers className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
            </span>
          </motion.button>

          {/* آیکون‌های اجتماعی با گلاسمورفیسم */}
          <div className="flex items-center gap-1 mr-2">
            {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                href="#"
                className="relative text-gray-600 hover:text-white transition-all duration-300 p-2.5 rounded-xl group/social"
              >
                {/* پس‌زمینه شیشه‌ای */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 group-hover/social:bg-gradient-to-r group-hover/social:from-pink-500/20 group-hover/social:via-purple-500/20 group-hover/social:to-indigo-500/20 transition-all duration-300" />
                
                <Icon className="w-4 h-4 relative z-10 group-hover/social:scale-110 transition-transform" />
                
                {/* درخشش هاور */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover/social:from-pink-500/30 group-hover/social:to-purple-500/30 blur-sm transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* دکمه منوی موبایل پیشرفته */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="relative text-gray-700 p-2.5 rounded-xl group/mobile"
          >
            {/* پس‌زمینه شیشه‌ای */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10" />
            
            {isOpen ? (
              <FiX className="h-6 w-6 relative z-10 text-pink-600" />
            ) : (
              <FiMenu className="h-6 w-6 relative z-10 group-hover/mobile:text-pink-600 transition-colors" />
            )}
            
            {/* افکت پالس */}
            {!isOpen && (
              <div className="absolute inset-0 rounded-xl border-2 border-pink-500/30 animate-ping opacity-0 group-hover/mobile:opacity-100" />
            )}
          </motion.button>
        </div>
      </div>

      {/* منوی موبایل پیشرفته */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-pink-500/20 overflow-hidden"
            style={{ fontFamily: "'Vazirmatn', 'Segoe UI', sans-serif" }}
          >
            {/* گرادینت پس‌زمینه منو */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-purple-50/30 to-indigo-50/30" />
            
            <div className="container mx-auto px-4 py-6 space-y-1 relative z-10" dir="rtl">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative group/mobile-item"
                >
                  <a
                    href="#"
                    onClick={() => {
                      setIsOpen(false);
                      if (item.name === "رویدادها") onEventClick();
                    }}
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 font-medium py-4 px-4 tracking-wide transition-all duration-300 rounded-xl hover:bg-white/50"
                  >
                    {item.icon && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover/mobile-item:from-pink-500/20 group-hover/mobile-item:to-purple-500/20 transition-all">
                        <item.icon className="w-4 h-4 text-pink-600" />
                      </div>
                    )}
                    {item.name}
                    
                    <FiUsers className="w-4 h-4 mr-auto text-gray-400 group-hover/mobile-item:text-pink-500 group-hover/mobile-item:-translate-x-1 transition-all" />
                  </a>
                  
                  {/* جداکننده - موقعیت‌دهی اصلاح‌شده */}
                  {index < navItems.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent mx-4" />
                  )}
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false);
                  onGetStarted();
                }}
                className="w-full relative mt-6 px-6 py-4 rounded-xl font-medium shadow-lg shadow-pink-500/20 overflow-hidden group/mobile-cta"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover/mobile-cta:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10 text-white font-semibold tracking-wide flex items-center justify-center gap-3">
                  شروع کنید
                  <FiUsers className="w-5 h-5 group-hover/mobile-cta:rotate-12 transition-transform" />
                  <FiUsers className="w-4 h-4 group-hover/mobile-cta:-translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;