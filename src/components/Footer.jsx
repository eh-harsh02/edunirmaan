import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-sky-100 text-gray-800 py-10 mt-12">
      <div className="container mx-auto px-6 md:px-12 grid gap-8 md:grid-cols-2 items-center">
        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h2>
          <p className="text-sm mb-4 text-gray-600">
            Stay updated with the latest news and updates from EduNirmaan.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-auto flex-1"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-start md:justify-end space-x-4 mb-4 md:mb-2 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/-harsh-raj-/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/eh-harsh02" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-center md:text-right text-gray-600">
            © 2025 EduNirmaan, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
