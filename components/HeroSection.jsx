import { motion } from "framer-motion";
import { FiCalendar, FiUsers, FiMapPin, FiChevronLeft, FiStar, FiCheckCircle } from "react-icons/fi";
import "@raha.group/persian-fonts"; // فونت فارسی اضافه شد

const HeroSection = ({ onPlanEvent }) => {
  const stats = [
    { icon: FiCalendar, value: "۵۰۰+", label: "رویداد برگزار شده" },
    { icon: FiUsers, value: "۵۰هزار+", label: "شرکت‌کننده خوشحال" },
    { icon: FiMapPin, value: "۱۰۰+", label: "محل برگزاری" },
  ];

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-l from-purple-200 via-pink-100 to-indigo-200"
      style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-pink-50 via-purple-50 to-indigo-50 opacity-50" />

      {/* Decorative blobs - فقط نیم دایره پایین سمت راست باقی ماند */}
      <div className="absolute w-80 h-80 rounded-full bg-purple-100/30 bottom-32 -right-32 animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ---------- RIGHT TEXT CONTENT (RTL) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-right"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 ml-auto border border-white/50 shadow-lg"
            >
              <span className="text-sm font-medium text-gray-700">برترین سرویس برگزاری رویداد</span>
              <FiStar className="w-4 h-4 text-yellow-500" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900"
            >
              خلق تجربیات{" "}
              <span className="bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                فراموش‌نشدنی
              </span>
              <br />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed"
            >
              برنامه‌ریزی، کشف و لذت بردن از رویدادها در یک مکان. از گردهمایی‌های سازمانی تا جشن‌های شخصی،
              ما چشم‌انداز شما را با برنامه‌ریزی و اجرای بی‌نقص به واقعیت تبدیل می‌کنیم.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-right">
                {[
                  "طراحی سفارشی رویداد",
                  "انتخاب و رزرو محل برگزاری",
                  "تدارکات پذیرایی و دکوراسیون",
                  "برنامه‌ریزی سرگرمی و برنامه‌ها"
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-row-reverse items-center gap-3 text-right"
                  >
                    <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row-reverse gap-4 mb-16 justify-start sm:justify-end text-right"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onPlanEvent}
                className="bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 text-white text-lg px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FiChevronLeft className="w-5 h-5" />
                <span>برنامه‌ریزی رویداد شما</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 text-lg px-8 py-4 rounded-lg font-medium border-2 border-white/50 hover:border-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FiChevronLeft className="w-5 h-5" />
                <span>مشاهده نمونه کارها</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl ml-auto text-right"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.15, type: "spring", stiffness: 100 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-right border border-white/50 shadow-lg hover:shadow-xl transition-all"
                >
                  <stat.icon className="w-8 h-8 text-pink-500 mb-3 ml-auto" />
                  <div className="text-3xl font-bold bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- LEFT 3D MODEL با موقعیت جابه‌جا شده ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center h-full"
            style={{ transform: "translateY(-120px)" }} // تغییر: مدل 120px به بالا منتقل شد (بیشتر)
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              
              {/* Floating shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 8, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-pink-500/25 to-purple-500/25 blur-xl"
                />

                <motion.div
                  animate={{
                    y: [0, 35, 0],
                    rotate: [0, -12, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative z-10 w-72 h-72"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-indigo-500/40 rounded-[40%] rotate-45 backdrop-blur-sm" />
                  <div className="absolute inset-10 bg-gradient-to-r from-pink-400/25 via-purple-400/25 to-indigo-400/25 rounded-[30%] -rotate-45" />
                  <div className="absolute inset-20 bg-gradient-to-r from-pink-300/15 via-purple-300/15 to-indigo-300/15 rounded-[20%] rotate-12" />
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 120 - 60, 0],
                    x: [0, Math.random() * 120 - 60, 0],
                    scale: [1, 1.6, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;