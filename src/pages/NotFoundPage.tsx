import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] bg-white dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-7xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Please check the URL or go back to the homepage.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
