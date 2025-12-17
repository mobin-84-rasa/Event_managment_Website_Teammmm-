import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiHome, FiUsers, FiX, FiArrowRight } from "react-icons/fi";

const RoleSelection = ({ isOpen, onClose }) => {
  const roles = [
    {
      icon: FiCalendar,
      title: "Event Organizer",
      description: "Plan, create, and manage your events with powerful tools and analytics.",
      color: "blue-600",
      gradient: "from-blue-200 to-blue-900",
    },
    {
      icon: FiHome,
      title: "Venue Owner",
      description: "List your venue, accept bookings, and manage reservations effortlessly.",
      color: "pink-500",
      gradient: "from-pink-200 to-pink-900",
    },
    {
      icon: FiUsers,
      title: "Attender",
      description: "Discover events, get tickets, and join unforgettable experiences.",
      color: "cyan-500",
      gradient: "from-cyan-100 to-cyan-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative p-8 pb-0">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
              >
                <FiX className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
                  Choose Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Role
                  </span>
                </h2>
                <p className="text-gray-700 text-lg">
                  Select how you want to use the platform
                </p>
              </motion.div>
            </div>

            {/* Role Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
            >
              {roles.map((role) => {
                // کلاس‌های رنگی ثابت برای Tailwind
                let textColorClass = "";
                switch (role.color) {
                  case "blue-600":
                    textColorClass = "text-blue-600";
                    break;
                  case "pink-500":
                    textColorClass = "text-pink-500";
                    break;
                  case "cyan-500":
                    textColorClass = "text-cyan-500";
                    break;
                  default:
                    textColorClass = "text-gray-700";
                }

                return (
                  <motion.div
                    key={role.title}
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white rounded-2xl p-6 cursor-pointer shadow hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <role.icon className={`${textColorClass} w-7 h-7`} />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-3 text-gray-900 group-hover:${textColorClass} transition-all duration-300`}>
                      {role.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {role.description}
                    </p>

                    {/* Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-2 ${textColorClass} font-semibold text-sm group-hover:gap-3 transition-all duration-300`}
                    >
                      Continue
                      <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoleSelection;
