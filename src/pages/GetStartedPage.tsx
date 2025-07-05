import React, { useState, ChangeEvent, FormEvent } from "react";
import { send } from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesList: string[] = [
  "Web Development",
  "App Development",
  "Enterprise Software Solutions",
  "Digital Marketing",
  "Cloud Hosting & DevOps",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  projectDetails: string;
};

export default function GetStartedPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    projectDetails: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const serviceID = "service_6x662ap";
    const templateID = "template_a8cy8pz";
    const publicKey = "vShlb4wLb0UznfgMU";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      services: formData.services.join(", "),
      projectDetails: formData.projectDetails,
    };

    send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setSuccessMsg("Thank you! Your request has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          projectDetails: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg("Oops! Something went wrong. Please try again later.");
        console.error("EmailJS error:", err);
      });
  };

  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen flex justify-center py-16 px-4">
        <div className="container max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-12">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-600 dark:text-blue-400">
            Get Started with Flowbyte Solutions
          </h1>
          <p className="mb-10 text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tell us about your project and the services you need. Our expert team
            will get back to you with a tailored plan and quote.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 text-gray-900 dark:text-gray-100"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-3 font-semibold text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-3 font-semibold text-lg">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-3 font-semibold text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block mb-3 font-semibold text-lg">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company or organization"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Services Checkboxes */}
            <div>
              <label className="block mb-3 font-semibold text-lg">
                Services Required
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-3 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="text-lg">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label
                htmlFor="projectDetails"
                className="block mb-3 font-semibold text-lg"
              >
                Project Details / Requirements
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={6}
                placeholder="Describe your project, goals, timeline, budget, or any other details..."
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-extrabold py-4 rounded-lg text-xl transition-colors`}
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {/* Success & Error Messages */}
            {successMsg && (
              <p className="text-green-600 mt-4 text-center font-semibold">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="text-red-600 mt-4 text-center font-semibold">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
