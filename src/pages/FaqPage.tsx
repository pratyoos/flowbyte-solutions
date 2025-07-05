import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
              We Answer
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {([
              {
                q: "What web development services do you offer?",
                a: "We provide custom web development including responsive websites, e-commerce platforms, and CMS solutions tailored to your business needs."
              },
              {
                q: "Do you develop mobile applications?",
                a: "Yes, we specialize in both iOS and Android app development using the latest technologies to ensure seamless user experience."
              },
              {
                q: "What kind of enterprise software solutions do you provide?",
                a: "We deliver customized enterprise software such as CRM, ERP, and workflow automation to enhance your business efficiency and productivity."
              },
              {
                q: "How does your digital marketing service work?",
                a: "Our digital marketing team helps with SEO, social media management, PPC campaigns, and content marketing to grow your online presence."
              },
              {
                q: "Do you offer cloud hosting and infrastructure services?",
                a: "Yes, we provide secure and scalable cloud hosting solutions tailored to your application’s needs on platforms like AWS, Azure, and Google Cloud."
              },
              {
                q: "How long does a typical project take?",
                a: "Project duration varies depending on scope, but we ensure timely delivery with clear milestones and regular updates throughout development."
              },
              {
                q: "What is your pricing model?",
                a: "We offer flexible pricing models including fixed-price, hourly rates, and milestone-based payments depending on the project requirements."
              },
              {
                q: "Do you provide maintenance and support after project delivery?",
                a: "Absolutely. We offer ongoing maintenance and support packages to ensure your application stays up-to-date and runs smoothly."
              },
              {
                q: "Can you help with migrating existing applications to the cloud?",
                a: "Yes, our team has extensive experience migrating legacy applications to modern cloud platforms with minimal downtime."
              },
              {
                q: "How do you ensure the security of the applications you develop?",
                a: "Security is our priority. We follow best practices including code audits, penetration testing, data encryption, and compliance with industry standards."
              },
            ] as { q: string; a: string }[]).map(({ q, a }, index) => (
              <div key={index}>
                <h4 className="mb-3 text-xl font-semibold">{q}</h4>
                <p className="leading-relaxed text-lg text-gray-600 dark:text-gray-400">{a}</p>
              </div>
            ))}
          </div>

          {/* Contact Link */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
