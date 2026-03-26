import React from "react";

const About = () => {
  return (
    <div className="about px-6 py-10 max-w-4xl mx-auto transition-colors duration-300 
                    text-gray-800 dark:text-gray-200 
                    bg-white dark:bg-gray-900">

    

      <h3 className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
        Welcome to our food app — your go-to destination for discovering delicious meals, exploring new cuisines, and satisfying your cravings anytime, anywhere.

        <br /><br />

        We believe that great food brings people together. Our mission is to make ordering food simple, fast, and enjoyable. Whether you're in the mood for comfort food, healthy meals, or something new, we connect you with the best restaurants around you.

        <br /><br />

        With a user-friendly interface, real-time tracking, and a wide variety of options, we aim to deliver not just food, but a delightful experience right to your doorstep.

        <br /><br />

        Our platform is built with passion and designed for convenience — helping you spend less time searching and more time enjoying your meal.
      </h3>

      <h3 className="text-xl font-semibold mb-3">
        Why Choose Us?
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Wide range of restaurants and cuisines</li>
        <li>Fast and reliable delivery</li>
        <li>Easy ordering experience</li>
        <li>Secure payments</li>
        <li>Personalized recommendations</li>
      </ul>

      <h4 className="mt-6 text-gray-600 dark:text-gray-400">
        We’re constantly evolving to serve you better — because you deserve nothing but the best when it comes to food.
      </h4>

      <h5 className="mt-4 text-lg font-medium text-center">
        Happy Ordering! 🍴
      </h5>
    </div>
  );
};

export default About;