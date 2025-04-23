import React from "react";
import { Button } from "./components/ui/button";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
          <div className="flex items-center space-x-3">

            <img
              src="src/image/logo.png" // Replace with the correct logo path
              alt="NLITE Logo"
              className="h-10"

            />
            <nav1 className="first1">
              <a href="#" className="text-blue-500 font-bold">Home</a>
              <a href="#">About</a>
              <a href="#">Courses</a>
              <a href="#">Blogs</a>
              <a href="#">Contact US</a>
              <a
                href="#"
                className=" btn btn-success bg-[#0c0846] text-white font-bold text-base px-5 py-2 rounded-lg hover:bg-blue-900 transition"
              >
                Enroll Now
              </a>
            </nav1>
          </div>

          {/* Navigation */}

          {/* Enroll Now Button */}

        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center text-black justify-between px-10 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Empower Your Professional Journey With Industry-Ready Skills
            </h1>
            <ul className="space-y-3 text-lg">
              <li>
                ✅ Build Real-world projects with in-person collaboration.
              </li>
              <li>
                ✅ Individual tailored learning approach
              </li>
              <li>
                ✅ Mentored by industry experts
              </li>
              <li>
                ✅ Get intensive placement assistance
              </li>
            </ul>
            <Button className="mt-6 bg-blue-600 btn btn-primary hover:bg-blue-500 text-white px-5 py-2 rounded-xl">
              Enroll Now
            </Button>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="mb-10 lg:mb-0 mt-2 lg:ml-10">
            <img
              src="/src/image/picture1.png"
              alt="Students working on project"
              className="w-100"
            />
          </div>
        </section>



        <section className="flex flex-col-reverse lg:flex-row items-center text-black justify-between px-10 py-16 bg-white">
          {/* Left Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
              Learn with effective <br />
              <span className="text-blue-600">classroom based training</span> <br />
              <span className="text-blue-600">for real-world success</span>
            </h1>
          </div>

          {/* Right Card */}
          <div className="lg:w-1/2 bg-gray-100 rounded-2xl shadow-lg p-8">
            {/* Logo and Title */}
            <div className="flex flex-col items-start space-y-3">
              <img
                src="src/image/logo.png" // update with your logo path
                alt="NLITE Logo"
                className="h-6 mb-1"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Full Stack web development
              </h2>
              <p className="text-2xl font-bold text-blue-600 leading-tight">
                Java and <br /> react
              </p>

              {/* Button */}
              <a
                href="#"
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition"
              >
                Enroll Now
              </a>
            </div>

            {/* Image Placeholder */}
            <div className="mt-6">
              <img
                src="src/image/logo1.png" // change this to your actual image
                alt="Course Illustration"
                className="w-25 h-auto"
              />
            </div>
          </div>
        </section>



        <br></br>
        <div className="text-black">
          <img
            src="/src/image/footer.png"
            alt="Students working on project"
            className="w-100"
          />
        </div>
      </div>




    </>
  )
}
export default HomePage;
