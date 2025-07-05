import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Service {
  title: string;
  content: string;
}

export default function Services(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Web Development",
      content:
        "We build responsive, scalable, and high-performing websites tailored to your business needs using modern frameworks like React, Next.js, and Node.js.",
    },
    {
      title: "App Development",
      content:
        "We develop Android and iOS applications with seamless user experience, robust backend, and full integration support.",
    },
    {
      title: "Enterprise Software Solutions",
      content:
        "Custom enterprise-grade software solutions to streamline business operations, boost productivity, and improve decision-making.",
    },
    {
      title: "Digital Marketing",
      content:
        "End-to-end digital marketing strategies, including SEO, SEM, social media management, and performance analytics to grow your business online.",
    },
    {
      title: "Cloud Hosting & DevOps",
      content:
        "Reliable cloud hosting, CI/CD pipeline setup, containerization, and infrastructure automation with AWS, Docker, and Kubernetes.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 xl:max-w-7xl text-center">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 mb-2">
              Services
            </p>
            <h1 className="text-4xl lg:text-5xl font-black text-blue-600 dark:text-white mb-4">
              Empowering Businesses with Innovative IT Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              At Flowbyte Solutions, we provide cutting-edge digital solutions that drive growth and efficiency. Our team specializes in web & mobile app development, cloud solutions, and digital marketing tailored to your business goals.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden text-left"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {service.title}
                  <span className="text-xl transform transition-transform duration-300">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-6 pb-4 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {service.content}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl px-6 py-10 shadow-md max-w-3xl mx-auto mt-12">
            <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-white">
              Ready to build something exceptional?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let's connect and take your idea to the next level.
            </p>
            <a
              href="/get-started"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}