import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const footerLinks = {
    شرکت: ["درباره ما", "فرصت‌های شغلی", "وبلاگ", "اخبار"],
    پشتیبانی: ["مرکز راهنمایی", "تماس با ما", "سوالات متداول", "قوانین خدمات"],
    خدمات: ["برنامه‌ریزی رویداد", "رزرو سالن", "پذیرایی", "سرگرمی"],
  };

  const socialLinks = [
    { label: "فیس‌بوک", href: "#", icon: FiFacebook },
    { label: "توییتر", href: "#", icon: FiTwitter },
    { label: "اینستاگرام", href: "#", icon: FiInstagram },
  ];

  return (
    <footer
      id="contact"
      dir="rtl"
      className="relative overflow-hidden pt-16 pb-12 bg-gradient-to-l from-purple-200 via-pink-100 to-indigo-200"
      style={{ fontFamily: "'Yekan', 'Lotus', sans-serif" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-pink-50 via-purple-50 to-indigo-50 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="flex items-center mb-6"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl ml-3 shadow-lg">
                E
              </div>
              <span className="text-2xl font-bold text-gray-900">مدیریت رویداد</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-gray-700 mb-8 max-w-sm text-right"
            >
              ایجاد تجربه‌های فراموش‌نشدنی از طریق برنامه‌ریزی روان رویداد و خدمات استثنایی.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-sm text-gray-700 justify-end">
                <span className="text-right">hello@eventmanager.com</span>
                <FiMail className="w-4 h-4 text-pink-500" />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 justify-end">
                <span className="text-right">+1 (555) 123-4567</span>
                <FiPhone className="w-4 h-4 text-purple-500" />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 justify-end">
                <span className="text-right">سان فرانسیسکو، کالیفرنیا</span>
                <FiMapPin className="w-4 h-4 text-indigo-500" />
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8"
            >
              <h4 className="font-semibold mb-4 text-gray-800 text-right">عضویت در خبرنامه</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="flex-grow px-4 py-2 text-sm rounded-r-lg border border-gray-300 focus:outline-none focus:border-pink-500"
                  dir="ltr"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-semibold text-white rounded-l-lg bg-gradient-to-l from-pink-500 via-purple-500 to-indigo-500 flex items-center gap-2"
                >
                  عضویت
                  <FiArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (sectionIndex + 1), duration: 0.4 }}
              className="text-right"
            >
              <h4 className="font-semibold mb-4 text-gray-800">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-700 hover:text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text transition-all duration-300 text-sm block"
                      whileHover={{ x: -3 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm text-gray-700"
            >
              © ۱۴۰۳ مدیریت رویداد. تمامی حقوق محفوظ است.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-gray-700 hover:text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:border-pink-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;