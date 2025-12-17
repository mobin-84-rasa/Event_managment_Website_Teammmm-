import { motion } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiMapPin, FiUsers, FiMusic, FiCamera, FiCoffee, FiArrowRight, FiEye } from "react-icons/fi";

const features = [
  { icon: FiCalendar, title: "برنامه‌ریزی آسان", description: "با برنامه‌ریز ساده و قابل‌فهم ما رویدادهای خود را به راحتی برنامه‌ریزی کنید." },
  { icon: FiMapPin, title: "مدیریت مکان‌ها", description: "چندین مکان و سالن را در یکجا مدیریت کنید." },
  { icon: FiUsers, title: "پیگیری شرکت‌کنندگان", description: "به راحتی حضور و RSVP شرکت‌کنندگان را مدیریت کنید." },
  { icon: FiMusic, title: "امکانات سرگرمی", description: "از بین خدمات مختلف سرگرمی برای رویداد خود انتخاب کنید." },
  { icon: FiCamera, title: "پوشش رسانه‌ای", description: "لحظات خود را با امکانات عکس و ویدئو ثبت کنید." },
  { icon: FiCoffee, title: "خدمات پذیرایی", description: "سرو غذا و نوشیدنی را برای انواع رویدادها سازماندهی کنید." },
];

const FeaturesSection = () => {
  const ref = useRef(null);

  return (
    <section 
      dir="rtl"
      ref={ref} 
      className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-l from-purple-200 via-pink-100 to-indigo-200"
      style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-pink-50 via-purple-50 to-indigo-50 opacity-50" />

      {/* حذف شده: <div className="absolute w-64 h-64 rounded-full bg-pink-100/30 top-20 -left-20 animate-float-delayed" /> */}
      {/* حذف شده: <div className="absolute w-72 h-72 rounded-full bg-indigo-100/30 -bottom-20 -right-20 animate-float" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight">
            <span className="bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              امکانات کامل
            </span>
            {" "}برای رویدادهای شما
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            همه چیزهایی که برای سازماندهی، مدیریت و لذت بردن از رویدادهای موفق به آن نیاز دارید.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500" />
            <span className="relative z-10 text-white flex items-center gap-2">
              <FiEye className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              کشف امکانات بیشتر
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;