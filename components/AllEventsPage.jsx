import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiMapPin, FiCalendar, FiArrowRight, FiEye, FiSearch, FiFilter, 
  FiClock, FiUsers, FiTag, FiChevronDown, FiX
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@raha.group/persian-fonts";

const AllEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { name: "همه", icon: "🎯", color: "from-purple-500 to-pink-500" },
    { name: "کنفرانس", icon: "💼", color: "from-blue-500 to-cyan-500" },
    { name: "فستیوال", icon: "🎉", color: "from-pink-500 to-red-500" },
    { name: "گالا", icon: "✨", color: "from-purple-500 to-indigo-500" },
    { name: "شبکه‌سازی", icon: "🤝", color: "from-green-500 to-teal-500" },
    { name: "نمایشگاه", icon: "🎨", color: "from-yellow-500 to-orange-500" },
    { name: "شرکتی", icon: "🏢", color: "from-gray-600 to-blue-600" },
    { name: "ورزشی", icon: "⚽", color: "from-green-600 to-emerald-600" },
    { name: "آموزشی", icon: "🎓", color: "from-blue-400 to-cyan-400" },
    { name: "فرهنگی", icon: "🏛️", color: "from-amber-600 to-orange-600" },
  ];

  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      title: "همایش نوآوری فناوری",
      description: "همایش سالیانه نوآوری در فناوری با حضور برترین شرکت‌های تکنولوژی جهان",
      date: "۱۵ فروردین ۱۴۰۴",
      time: "۱۰:۰۰ - ۱۸:۰۰",
      location: "سان فرانسیسکو، آمریکا",
      category: "کنفرانس",
      attendees: 1200,
      price: "رایگان",
      categoryColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop",
      title: "جشنواره موسیقی تابستانه",
      description: "بزرگترین جشنواره موسیقی سال با اجرای هنرمندان مطرح بین‌المللی",
      date: "۲۰ تا ۲۲ تیر ۱۴۰۴",
      time: "۱۶:۰۰ - ۲۴:۰۰",
      location: "آستین، تگزاس",
      category: "فستیوال",
      attendees: 5000,
      price: "۲۹۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-pink-500 to-red-500",
      featured: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      title: "شب گالا و تجملی",
      description: "مراسم گالای خیریه با حضور چهره‌های سرشناس و جمع‌آوری کمک برای کودکان",
      date: "۱۶ اردیبهشت ۱۴۰۴",
      time: "۲۰:۰۰ - ۲۳:۰۰",
      location: "نیویورک، آمریکا",
      category: "گالا",
      attendees: 300,
      price: "۵۰۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
      featured: true,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop",
      title: "شب شبکه‌سازی استارتاپ‌ها",
      description: "فرصتی برای ملاقات با سرمایه‌گذاران و کارآفرینان موفق",
      date: "۸ فروردین ۱۴۰۴",
      time: "۱۷:۰۰ - ۲۱:۰۰",
      location: "سیاتل، واشنگتن",
      category: "شبکه‌سازی",
      attendees: 450,
      price: "۱۵۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      title: "نمایشگاه هنر و طراحی",
      description: "نمایشگاه آثار هنرمندان معاصر و طراحان نوآور",
      date: "۱۰ تا ۱۲ اردیبهشت ۱۴۰۴",
      time: "۱۱:۰۰ - ۱۹:۰۰",
      location: "لس‌آنجلس، آمریکا",
      category: "نمایشگاه",
      attendees: 2500,
      price: "۸۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      title: "گردهمایی شرکتی سالانه",
      description: "گردهمایی کارکنان و مدیران برای بررسی دستاوردهای سال",
      date: "۱۸ تا ۲۰ تیر ۱۴۰۴",
      time: "۰۹:۰۰ - ۱۷:۰۰",
      location: "دنور، کلرادو",
      category: "شرکتی",
      attendees: 800,
      price: "عضویت شرکتی",
      categoryColor: "bg-gradient-to-r from-gray-600 to-blue-600",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      title: "ماراتون شهری",
      description: "مسابقه دو ماراتون در سطح شهر با جوایز نقدی",
      date: "۵ خرداد ۱۴۰۴",
      time: "۰۶:۰۰ - ۱۲:۰۰",
      location: "تورنتو، کانادا",
      category: "ورزشی",
      attendees: 3000,
      price: "۱۲۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-green-600 to-emerald-600",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      title: "کارگاه برنامه‌نویسی پیشرفته",
      description: "کارگاه عملی آموزش برنامه‌نویسی با متخصصان بین‌المللی",
      date: "۱۲ اردیبهشت ۱۴۰۴",
      time: "۱۴:۰۰ - ۱۸:۰۰",
      location: "لندن، انگلستان",
      category: "آموزشی",
      attendees: 100,
      price: "۳۵۰,۰۰۰ تومان",
      categoryColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
      title: "جشنواره غذاهای محلی",
      description: "معرفی و فروش غذاهای سنتی از سراسر کشور",
      date: "۲۸ تا ۳۰ فروردین ۱۴۰۴",
      time: "۱۲:۰۰ - ۲۲:۰۰",
      location: "تهران، ایران",
      category: "فرهنگی",
      attendees: 4000,
      price: "ورودی رایگان",
      categoryColor: "bg-gradient-to-r from-amber-600 to-orange-600",
    },
  ];

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "همه" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50" dir="rtl" style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}>
      <Header />
      
      {/* Simple Top Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500">
        {/* Blobs */}
        <div className="absolute w-64 h-64 rounded-full bg-white/10 top-10 right-10 animate-float" />
        <div className="absolute w-48 h-48 rounded-full bg-pink-300/20 bottom-10 left-10 animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                همه رویدادها
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              کشف بهترین رویدادهای در حال برگزاری در سراسر جهان
            </p>
          </motion.div>

          {/* Search Bar Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="دنبال چه رویدادی هستید؟ (عنوان، توضیحات یا مکان)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-4 text-lg rounded-2xl border-2 border-white/30 bg-white/95 backdrop-blur-sm shadow-2xl focus:border-white focus:ring-3 focus:ring-white/30 outline-none transition-all placeholder-gray-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filter Section */}
            <div className="relative">
              {/* Selected Category Display */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">دسته‌بندی:</span>
                  {selectedCategoryData && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${selectedCategoryData.color} text-white shadow-lg`}>
                      <span className="text-lg">{selectedCategoryData.icon}</span>
                      <span className="font-semibold">{selectedCategoryData.name}</span>
                      <button
                        onClick={() => setSelectedCategory("همه")}
                        className="hover:bg-white/20 p-1 rounded-full"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-2 text-white hover:text-yellow-200 transition-colors"
                >
                  <span>تغییر دسته</span>
                  <FiChevronDown className={`h-5 w-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Category Dropdown */}
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-4 mt-2"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setIsCategoryOpen(false);
                        }}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.name
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                            : 'bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md'
                        }`}
                      >
                        <span className="text-2xl mb-2">{category.icon}</span>
                        <span className="font-medium text-sm">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {filteredEvents.length}
                  </span> رویداد پیدا شد
                </h2>
                <p className="text-gray-600">
                  {selectedCategory !== "همه" ? `در دسته "${selectedCategory}"` : "در تمام دسته‌بندی‌ها"}
                  {searchTerm && ` برای "${searchTerm}"`}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("همه");
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-medium hover:shadow-md transition-all flex items-center gap-2"
                >
                  <FiX className="h-4 w-4" />
                  حذف فیلترها
                </button>
                
                <button className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                  <FiFilter className="h-4 w-4" />
                  فیلتر پیشرفته
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50"
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span>⭐</span>
                    <span>ویژه</span>
                  </span>
                </div>
              )}

              {/* Event Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute bottom-4 right-4 px-4 py-2 rounded-full text-white text-sm font-semibold ${event.categoryColor} shadow-lg backdrop-blur-sm`}>
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <FiCalendar className="w-4 h-4 text-pink-500" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FiClock className="w-4 h-4 text-purple-500" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <FiMapPin className="w-4 h-4 text-indigo-500" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <FiUsers className="w-4 h-4 text-teal-500" />
                      <span>{event.attendees.toLocaleString()} نفر</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold">
                      <FiTag className="w-4 h-4 text-amber-500" />
                      <span className={event.price === "رایگان" || event.price === "عضویت شرکتی" ? "text-green-600" : "text-pink-600"}>
                        {event.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/event/${event.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <span>مشاهده و رزرو</span>
                    <FiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">رویدادی یافت نشد</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              متأسفانه هیچ رویدادی مطابق با جستجوی شما وجود ندارد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("همه");
                }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
              >
                <FiEye className="w-5 h-5" />
                نمایش همه رویدادها
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCategoryOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
              >
                <FiFilter className="w-5 h-5" />
                تغییر دسته‌بندی
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllEventsPage;