import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div className="contact px-6 py-10 max-w-4xl mx-auto 
                    bg-white dark:bg-gray-900 
                    text-gray-800 dark:text-gray-200 
                    transition-colors duration-300">

      {/* Heading */}
     

      {/* User Component */}
      <div className="mb-6 flex justify-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
          <UserClass name="koushik class" location={"location class"} />
        </div>
      </div>

      {/* Intro */}
      <h3 className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        We’d love to hear from you! Whether you have a question, feedback, or need help with an order, our team is here to assist you.
      </h3>

      {/* Contact Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>📧 Email: support@yourfoodapp.com</li>
          <li>📞 Phone: +91 74793 69611</li>
        </ul>
      </div>

      {/* Support Hours */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Customer Support Hours</h3>
        <ul className="text-gray-700 dark:text-gray-300">
          <li>Monday – Sunday: 9:00 AM – 11:00 PM</li>
        </ul>
      </div>

      {/* Address */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <h4 className="text-gray-600 dark:text-gray-400">
          Kolkata, West Bengal, India
        </h4>
      </div>

      {/* Help Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Need Help with an Order?</h3>
        <h4 className="text-gray-600 dark:text-gray-400">
          If you're facing any issues with your order, please include your order ID while contacting us so we can assist you faster.
        </h4>
      </div>

      {/* Feedback */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Feedback & Suggestions</h3>
        <h4 className="text-gray-600 dark:text-gray-400">
          Your feedback helps us improve! Let us know how we can make your experience better.
        </h4>
      </div>

      {/* Footer */}
      <h5 className="text-center mt-8 text-lg font-medium">
        😊 We’re always here to make your food experience smooth and enjoyable
      </h5>
    </div>
  );
};

export default Contact;