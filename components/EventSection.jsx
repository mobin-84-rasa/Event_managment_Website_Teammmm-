import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiCalendar, FiArrowRight, FiEye } from "react-icons/fi";
import "@raha.group/persian-fonts";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      title: "همایش نوآوری فناوری",
      date: "۱۵ فروردین ۱۴۰۴",
      location: "سان فرانسیسکو، آمریکا",
      category: "کنفرانس",
      categoryColor: "bg-indigo-100 text-indigo-700",
    },
    {
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop",
      title: "جشنواره موسیقی تابستانه",
      date: "۲۰ تا ۲۲ تیر ۱۴۰۴",
      location: "آستین، تگزاس",
      category: "فستیوال",
      categoryColor: "bg-pink-100 text-pink-700",
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      title: "شب گالا و تجملی",
      date: "۱۶ اردیبهشت ۱۴۰۴",
      location: "نیویورک، آمریکا",
      category: "گالا",
      categoryColor: "bg-purple-100 text-purple-700",
    },
    {
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
      title: "شب شبکه‌سازی استارتاپ‌ها",
      date: "۸ فروردین ۱۴۰۴",
      location: "سیاتل، واشنگتن",
      category: "شبکه‌سازی",
      categoryColor: "bg-teal-100 text-teal-700",
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      title: "نمایشگاه هنر و طراحی",
      date: "۱۰ تا ۱۲ اردیبهشت ۱۴۰۴",
      location: "لس‌آنجلس، آمریکا",
      category: "نمایشگاه",
      categoryColor: "bg-indigo-100 text-indigo-700",
    },
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      title: "گردهمایی شرکتی",
      date: "۱۸ تا ۲۰ تیر ۱۴۰۴",
      location: "دنور، کلرادو",
      category: "شرکتی",
      categoryColor: "bg-pink-100 text-pink-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section
      id="events"
      dir="rtl"
      className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-l from-purple-200 via-pink-100 to-indigo-200"
      style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-pink-50 via-purple-50 to-indigo-50 opacity-50" />

      {/* حذف شده: <div className="absolute w-80 h-80 rounded-full bg-purple-100/30 -bottom-32 -right-32 animate-float" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight">
            کشف{" "}
            <span className="bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              رویدادهای شگفت‌انگیز
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            رویدادهای پیش‌رو را بررسی کنید و تجربه‌هایی پیدا کنید که الهام‌بخش شما باشند. به هزاران شرکت‌کننده خوشحال بپیوندید.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${event.categoryColor} backdrop-blur-sm border border-white/30`}
                >
                  {event.category}
                </span>
              </div>

              <div className="p-4 text-right">
                <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
                  {event.title}
                </h3>
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-2 text-gray-600 justify-end">
                    <FiCalendar className="w-3 h-3 text-pink-500" />
                    <span className="text-xs">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 justify-end">
                    <FiMapPin className="w-3 h-3 text-purple-500" />
                    <span className="text-xs">{event.location}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between w-full group/btn"
                >
                  <span className="text-xs font-semibold bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    مشاهده جزئیات
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <FiArrowRight className="w-2.5 h-2.5 text-white" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
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
              مشاهده همه رویدادها
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;