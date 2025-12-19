import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiMapPin, FiCalendar, FiArrowRight, FiEye, FiSearch, FiFilter, 
  FiClock, FiUsers, FiTag, FiChevronDown, FiX, FiStar, FiCheckCircle,
  FiGrid, FiList, FiTrendingUp
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@raha.group/persian-fonts";

const AllEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { name: "همه", icon: "🎯", color: "from-purple-500 to-pink-500", count: 9 },
    { name: "کنفرانس", icon: "💼", color: "from-blue-500 to-cyan-500", count: 1 },
    { name: "فستیوال", icon: "🎉", color: "from-pink-500 to-red-500", count: 1 },
    { name: "گالا", icon: "✨", color: "from-purple-500 to-indigo-500", count: 1 },
    { name: "شبکه‌سازی", icon: "🤝", color: "from-green-500 to-teal-500", count: 1 },
    { name: "نمایشگاه", icon: "🎨", color: "from-yellow-500 to-orange-500", count: 1 },
    { name: "شرکتی", icon: "🏢", color: "from-gray-600 to-blue-600", count: 1 },
    { name: "ورزشی", icon: "⚽", color: "from-green-600 to-emerald-600", count: 1 },
    { name: "آموزشی", icon: "🎓", color: "from-blue-400 to-cyan-400", count: 1 },
    { name: "فرهنگی", icon: "🏛️", color: "from-amber-600 to-orange-600", count: 1 },
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
      trending: true,
      rating: 4.8,
      organizer: "گروه فناوری ایرانیان",
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
      trending: true,
      rating: 4.9,
      organizer: "فستیوال بین‌المللی موسیقی",
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
      trending: false,
      rating: 4.7,
      organizer: "بنیاد خیریه کودکان",
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
      featured: false,
      trending: true,
      rating: 4.6,
      organizer: "مرکز رشد فناوری",
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
      featured: false,
      trending: true,
      rating: 4.5,
      organizer: "گالری هنر معاصر",
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
      featured: false,
      trending: false,
      rating: 4.3,
      organizer: "شرکت توسعه نرم‌افزار",
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
      featured: false,
      trending: true,
      rating: 4.8,
      organizer: "فدراسیون دو و میدانی",
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
      featured: false,
      trending: false,
      rating: 4.9,
      organizer: "آکادمی برنامه‌نویسی",
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
      featured: false,
      trending: true,
      rating: 4.7,
      organizer: "سازمان میراث فرهنگی",
    },
  ];

  // Filter events
  let filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "همه" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort events
  filteredEvents = [...filteredEvents].sort((a, b) => {
    switch(sortBy) {
      case "featured":
        return (b.featured === a.featured) ? 0 : b.featured ? 1 : -1;
      case "trending":
        return (b.trending === a.trending) ? 0 : b.trending ? 1 : -1;
      case "rating":
        return b.rating - a.rating;
      case "attendees":
        return b.attendees - a.attendees;
      case "date":
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  });

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      dir="rtl" 
      style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}
    >
      {/* 3D Background Elements - Inspired by HeroSection */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-l from-purple-200 via-pink-100 to-indigo-200" />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/25 to-purple-500/25 blur-3xl top-20 -left-40"
        />

        <motion.div
          animate={{ y: [0, 35, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl bottom-40 -right-40"
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* 3D Rotating Cube */}
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
          className="absolute w-40 h-40 top-1/4 left-1/4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-[40%] rotate-45 backdrop-blur-sm" />
          <div className="absolute inset-10 bg-gradient-to-r from-pink-400/15 via-purple-400/15 to-indigo-400/15 rounded-[30%] -rotate-45" />
        </motion.div>
      </div>

      <Header />
      
      {/* Hero Section - Inspired by HeroSection */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/50 shadow-lg"
            >
              <span className="text-lg font-medium text-gray-700">کاوش رویدادهای استثنایی</span>
              <FiStar className="w-5 h-5 text-yellow-500" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900"
            >
              <span className="bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                دنیای رویدادها
              </span>
              <br />
              در انتظار شماست
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              کشف و مشارکت در برترین رویدادهای ایران و جهان. از کنفرانس‌های تخصصی تا جشنواره‌های شاد،
              تجربه‌ای فراموش‌نشدنی برای شما آماده کرده‌ایم.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative mb-8">
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <FiSearch className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="چه رویدادی را دنبال می‌کنید؟ (عنوان، مکان، موضوع...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-14 pl-4 py-5 text-xl rounded-2xl border-3 border-white/40 bg-white/90 backdrop-blur-lg shadow-2xl focus:border-white focus:ring-4 focus:ring-white/30 outline-none transition-all placeholder-gray-500"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSearchTerm("")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FiX className="h-5 w-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            >
              {[
                { icon: "🎯", title: "انتخاب هوشمند", desc: "فیلترهای پیشرفته برای یافتن بهترین رویداد" },
                { icon: "⚡", title: "رزرو فوری", desc: "رزرو آنلاین و سریع بلیت‌ها" },
                { icon: "🌟", title: "تجربه برتر", desc: "رویدادهای باکیفیت و سازمان‌یافته" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.15, type: "spring", stiffness: 100 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Left - Results & Category */}
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-l from-pink-500 to-purple-500">
                    <FiCalendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      <span className="bg-gradient-to-l from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {filteredEvents.length}
                      </span> رویداد فعال
                    </h2>
                    <p className="text-gray-600">
                      {selectedCategory !== "همه" ? `در دسته "${selectedCategory}"` : "در تمام دسته‌بندی‌ها"}
                      {searchTerm && ` برای "${searchTerm}"`}
                    </p>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">دسته‌بندی:</span>
                    {selectedCategoryData && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r ${selectedCategoryData.color} text-white shadow-lg cursor-pointer`}
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      >
                        <span className="text-xl">{selectedCategoryData.icon}</span>
                        <span className="font-semibold">{selectedCategoryData.name}</span>
                        <FiChevronDown className={`h-5 w-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                      </motion.div>
                    )}
                  </div>

                  {/* Category Dropdown */}
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-4"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {categories.map((category) => (
                          <motion.button
                            key={category.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedCategory(category.name);
                              setIsCategoryOpen(false);
                            }}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                              selectedCategory === category.name
                                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg'
                            }`}
                          >
                            <span className="text-2xl mb-2">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                            <span className="text-xs mt-1 opacity-75">{category.count}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right - Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Sort Select */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 cursor-pointer shadow-lg"
                  >
                    <option value="featured">ویژه‌ها</option>
                    <option value="trending">پربازدید</option>
                    <option value="rating">بالاترین امتیاز</option>
                    <option value="attendees">تعداد شرکت‌کنندگان</option>
                    <option value="date">جدیدترین</option>
                  </select>
                  <FiTrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-xl transition-all ${
                      viewMode === "grid" 
                        ? 'bg-white shadow-lg' 
                        : 'hover:bg-gray-200'
                    }`}
                  >
                    <FiGrid className={`h-5 w-5 ${
                      viewMode === "grid" 
                        ? 'text-purple-600' 
                        : 'text-gray-500'
                    }`} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-xl transition-all ${
                      viewMode === "list" 
                        ? 'bg-white shadow-lg' 
                        : 'hover:bg-gray-200'
                    }`}
                  >
                    <FiList className={`h-5 w-5 ${
                      viewMode === "list" 
                        ? 'text-purple-600' 
                        : 'text-gray-500'
                    }`} />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("همه");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    <FiX className="h-4 w-4" />
                    حذف فیلترها
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'} mb-16`}>
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Event Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 h-full flex flex-col">
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {event.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <FiStar className="w-4 h-4" />
                        ویژه
                      </span>
                    )}
                    {event.trending && (
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <FiTrendingUp className="w-4 h-4" />
                        ترند
                      </span>
                    )}
                  </div>
                  
                  {/* Category */}
                  <div className={`absolute bottom-4 right-4 px-5 py-2 rounded-full text-white font-semibold ${event.categoryColor} shadow-lg backdrop-blur-sm`}>
                    {event.category}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
                    <span className="text-amber-500 font-bold">★</span>
                    <span className="font-bold text-gray-900">{event.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text transition-all duration-500">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    {event.description}
                  </p>

                  {/* Organizer */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiUsers className="w-4 h-4" />
                      <span>{event.organizer}</span>
                    </div>
                  </div>

                  {/* Details */}
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
                      <div className={`flex items-center gap-2 font-bold ${event.price === "رایگان" || event.price === "عضویت شرکتی" ? "text-green-600" : "text-pink-600"}`}>
                        <FiTag className="w-4 h-4" />
                        <span>{event.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/event/${event.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      <span>مشاهده رویداد</span>
                      <FiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
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
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative z-10 text-6xl">🔍</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">رویدادی یافت نشد</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              متأسفانه هیچ رویدادی مطابق با جستجوی شما وجود ندارد. می‌توانید دسته‌بندی را تغییر دهید یا کلمات کلیدی دیگر را امتحان کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("همه");
                }}
                className="px-8 py-4 bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
              >
                <FiEye className="w-5 h-5" />
                نمایش همه رویدادها
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCategoryOpen(true)}
                className="px-8 py-4 bg-white text-gray-700 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 border border-gray-200"
              >
                <FiFilter className="w-5 h-5" />
                تغییر دسته‌بندی
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-20 -right-20" />
            <div className="absolute w-32 h-32 rounded-full bg-white/10 bottom-10 -left-16" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-4">رویداد خاصی در نظر دارید؟</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                اگر رویداد مورد نظر خود را پیدا نکردید، ما می‌توانیم آن را برای شما برگزار کنیم!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-pink-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  درخواست رویداد سفارشی
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                >
                  تماس با کارشناسان
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AllEventsPage;
