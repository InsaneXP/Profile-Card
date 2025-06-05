import React from "react";
import UserImage from "./assets/profilePic.png";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full h-[160px] bg-red-700 flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full bg-white relative overflow-hidden">
            <img
              src={UserImage}
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="py-10 px-6 grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-red-700">Rohit Kumar Sahu</h3>
            <p className="font-semibold text-gray-700">Data Analyst</p>
          </div>
          <p className="text-center text-gray-500">
          I transform raw data into actionable insights that drive smart business decisions.
          With expertise in SQL, Python, and Power BI, I uncover patterns that fuel growth and efficiency.
          I’m passionate about turning numbers into narratives that solve real-world problems.
          </p>
          <div className="flex items-center justify-center">
            <span className="mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#1DA1F2]">
              <i className="fa-brands fa-twitter text-white"></i>
            </span>

            <span className="mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#131418]">
              <i className="fa-brands fa-behance text-white"></i>
            </span>

            <span className="mx-2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#0077b5]">
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </span>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold uppercase text-sm">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;