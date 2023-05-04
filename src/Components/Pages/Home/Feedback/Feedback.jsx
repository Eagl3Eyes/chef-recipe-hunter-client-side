import React from "react";

const Feedback = () => {
  return (
    <section className="container md:w-9/12 mx-auto px-10 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500"
                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt=""
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-gray-600 dark:text-white">
                  “As a UI/UX developer, I find Rooster Rest's website to be an excellent example of a well-designed food website. The website features a clean and intuitive layout with a consistent color scheme and typography that creates a cohesive and visually appealing experience. The website's responsive design also ensures that users can access the website on any device with ease. The website's high-quality imagery and use of animations and interactive elements also help to engage users and showcase the restaurant's offerings. Overall, Rooster Rest's website delivers an exceptional user experience that combines aesthetics, functionality, and accessibility to create an enjoyable and memorable experience for its users.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                Jack Foster
              </p>
              <p className="mt-1 text-base text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500"
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Ketty Perry"
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-gray-600 dark:text-white">
                  “Rooster Rest's website stands out for its clean, modern design and attention to detail. The website is optimized for performance and utilizes modern web technologies, making it fast and up-to-date with the latest web standards. The high-quality imagery and interactive elements throughout the website help to entice users and showcase the restaurant's offerings. As a frontend developer, I appreciate the well-structured code and consistent color scheme, which contribute to the overall user experience. Overall, Rooster Rest's website is a great example of a well-executed food website that is both visually appealing and technically sound.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                Regina Flores
              </p>
              <p className="mt-1 text-base text-gray-600">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
