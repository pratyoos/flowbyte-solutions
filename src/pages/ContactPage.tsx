import React, { FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
        <section className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            Have questions or want to work together? Fill out the form below or email us at{" "}
            <a
              href="mailto:support@flowbyte.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              support@flowbyte.com
            </a>
            .
          </p>
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              alert("Thank you for contacting us! We will get back to you shortly.");
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-sm">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
