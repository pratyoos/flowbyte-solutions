import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Flowbyte Solutions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            At Flowbyte Solutions, we specialize in building powerful digital experiences.
            From web and mobile development to digital marketing and cloud hosting,
            we empower businesses to grow with cutting-edge technology.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
            <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            <a href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQ</a>
            <a href="/get-started" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Get Started</a>
          </nav>
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Flowbyte Solutions. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Contact Us</h4>
          <div className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
            <p>📍 123 Tech Street, Innovation City, State 56789</p>
            <p>📞 <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition">+1 (234) 567-890</a></p>
            <p>📧 <a href="mailto:info@flowbytesolutions.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">info@flowbytesolutions.com</a></p>
          </div>
          <div className="mt-4 rounded-lg overflow-hidden shadow-lg h-40">
            <iframe
              title="Flowbyte Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019915987283!2d-122.42067908468166!3d37.77902677975814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a196fdf7d%3A0x934b9459bfb39c7e!2s123%20Tech%20Street!5e0!3m2!1sen!2sus!4v1672523523789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;