import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import ReactToPdf from "react-to-pdf";
const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [17, 11],
  };

  return (
    <div>
      <div className="mt-6 text-end mr-6">
        {/* <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
          {({ toPdf }) => (
            <button className="btn btn-success " onClick={toPdf}>
              <FaDownload className="inline-block mr-2 text-white"></FaDownload>{" "}
              Download Pdf
            </button>
          )}
        </ReactToPdf> */}
      </div>
      <div ref={ref} className="min-h-screen">
        <div className="mt-20 mx-10 text-primary border-2 bg-indigo-50  border-primary rounded p-5">
          <div>
            <h3 className="text-3xl font-semibold p-3">
              Q: Tell us the differences between uncontrolled and controlled components.
            </h3>
            <p className="text-xl ms-4 text-black">
              <span className="font-semibold">Ans:</span> The main differences between controlled and uncontrolled components are:
              <br />
              <br />
              <div className=" ml-5">
                <span className="font-semibold">State management:</span> Uncontrolled components manage their own state internally, while controlled components rely on the parent or other components to manage and update their state.
                <br />
                <span className="font-semibold">Input handling:</span> Uncontrolled components use refs to access and modify their own DOM elements, while controlled components rely on callbacks to modify the parent's state.
                <br />
                <span className="font-semibold">Validation:</span> Controlled components can validate user input before updating the state, while uncontrolled components cannot.
              </div>

            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: How to validate React props using PropTypes
            </h3>
            <p className="text-xl ms-4 text-black">
              <span className="font-semibold">Ans:</span> React provides a built-in package called PropTypes to validate the props passed to a component. PropTypes helps in checking the type, size, and requiredness of the props, ensuring that the correct data is passed to the component.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it efficient and lightweight, making it ideal for building scalable network applications. Node.js can be used for building web applications, but it requires additional libraries and frameworks to do so.
              <br />
              <br />
              Express.js, on the other hand, is a web application framework that runs on top of Node.js. It provides a set of tools and features that make it easier to build web applications, such as routing, middleware, and templates. Express.js is designed to be minimal and flexible, allowing developers to build web applications in their preferred way.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: In React, a custom hook is a function that starts with the word "use" and can encapsulate some reusable logic that can be shared across multiple components. Custom hooks allow developers to extract stateful logic from a component and reuse it in other components, making the code more modular and easier to maintain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;