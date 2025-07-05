import { useState } from "react";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Testimonial = {
  name: string;
  position?: string;
  company?: string;
  text: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

const employeeTestimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    position: "Senior Developer",
    text: "Working at Flowbyte Solutions has empowered me to grow professionally while making a real impact on client projects.",
  },
  {
    name: "Mark Thompson",
    position: "Project Manager",
    text: "The team culture here is amazing — supportive, innovative, and always pushing the limits to deliver quality.",
  },
  {
    name: "Emily Davis",
    position: "UI/UX Designer",
    text: "Flowbyte encourages creativity and innovation, making it an inspiring place to design beautiful user experiences.",
  },
];

const customerTestimonials: Testimonial[] = [
  {
    name: "Sarah Lee",
    company: "TechCorp",
    text: "Flowbyte Solutions delivered an outstanding web app that boosted our online sales by 40%. Highly recommend!",
  },
  {
    name: "David Kim",
    company: "InnoSoft",
    text: "Their digital marketing expertise helped us reach new audiences and improve our brand visibility significantly.",
  },
  {
    name: "Linda Park",
    company: "BrightFuture Inc.",
    text: "The cloud hosting solutions provided were reliable and scalable, supporting our rapid growth seamlessly.",
  },
];

const galleryImages: string[] = [
  "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664474557910-8e3a0210f48d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1677093906033-dc2beb53ace3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function TestimonialSlider({ testimonials }: TestimonialSliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, position, company, text } = testimonials[currentIndex];

  return (
    <div className="relative max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md">
      <p className="mb-6 text-gray-800 dark:text-gray-200 italic">"{text}"</p>
      <p className="font-semibold text-lg text-blue-600 dark:text-blue-400">{name}</p>
      {position && <p className="text-sm text-gray-600 dark:text-gray-400">{position}</p>}
      {company && <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>}

      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
      >
        ›
      </button>
    </div>
  );
}

export default function About(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 xl:max-w-7xl text-center">

          {/* Header Section */}
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500 mb-2">
              About
            </p>
            <h1 className="text-4xl lg:text-5xl font-black text-blue-600 dark:text-blue-400 mb-4">
              Flowbyte Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Empowering businesses through innovation in Web Development, App Development,
              Digital Marketing, and Cloud Hosting since our inception.
            </p>
          </div>

          {/* Statistics Section with CountUp */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={2200} duration={2.5} separator="," />+
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Users Reached</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={120} duration={2.5} />+
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Successful Projects</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={35} duration={2.5} />+
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Enterprise Clients</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={20} duration={2.5} />+
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Trusted Partners</p>
            </div>
          </div>

          {/* Company History */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Flowbyte Solutions began its journey as a small team of passionate developers and
              strategists in 2022. With a vision to transform how businesses leverage technology,
              we quickly grew into a full-fledged IT company. Today, we specialize in crafting
              custom web and mobile solutions, optimizing digital presence, and managing scalable
              cloud infrastructures. Our clients span startups to enterprises, and our work speaks
              for itself — intuitive, secure, and result-driven.
            </p>
          </div>

          {/* Trusted Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-10 text-blue-600 dark:text-blue-400">
              Our Trusted Partners
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-20">
              <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" alt="Google" className="h-12 hover:grayscale-0 transition" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s" alt="AWS" className="h-12 hover:grayscale-0 transition" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s" alt="Microsoft" className="h-12 hover:grayscale-0 transition" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRWT-hcJ-f4BG_ugvMwfcUCMKFsfCaC3kaw&s" alt="IBM" className="h-12 hover:grayscale-0 transition" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
                What Our Employees Say
              </h2>
              <TestimonialSlider testimonials={employeeTestimonials} />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
                What Our Customers Say
              </h2>
              <TestimonialSlider testimonials={customerTestimonials} />
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
              Our Work Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg overflow-hidden">
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Web development work"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl px-6 py-10 shadow-md max-w-3xl mx-auto">
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