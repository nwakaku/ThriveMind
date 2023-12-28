import React from "react";

export const MenuBar = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src={"https://img.fruugo.com/product/4/95/643727954_max.jpg"}
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Journal App
          </button>
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
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Coaching & Counseling
          </button>
        </div>
      </div>
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src="https://images.squarespace-cdn.com/content/v1/5593f9aee4b0dd04d19d670a/1612290599529-1FKPWGV24LTJDZRBETPH/Screen+Shot+2021-02-02+at+1.29.07+PM.png?format=1000w"
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Goal Tracker
          </button>
        </div>
      </div>
      {/* Repeat this div for each image */}
      <div className="relative group overflow-hidden">
        <img
          className="h-auto max-w-full rounded-lg transition-transform transform-gpu hover:scale-105"
          src="https://media.wired.com/photos/6500a13b4833e64e55fbdd51/master/w_960,c_limit/Apple-Watch-S9-Smart-Stack-Gear.jpg"
          alt=""
        />
        {/* Centered and larger button at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Fitness Tracker
          </button>
        </div>
      </div>
    </div>
  );
};
