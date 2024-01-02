import React from "react";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src={"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
          <Link href='/journal'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Journal App
          </button>
          </Link>
         
        </div>
      </div>
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src="https://assets.teenvogue.com/photos/59a4701863dcc0328f9c171a/4:3/w_5972,h_4479,c_limit/GettyImages-668440484.jpg"
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
        <Link href='/coaching'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Coaching and Counselling
          </button>
          </Link>
        </div>
      </div>
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src="https://images.unsplash.com/photo-1654195131868-cac1d8429d86?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
        <Link href='/goal'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Goal Tracker
          </button>
          </Link>
        </div>
      </div>
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src="https://fadv.com/wp-content/uploads/fa-healthcare-screening-1.jpg"
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
        <Link href='/health'>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Health Pro
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
