import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = ({ myDid, createAcc, info }) => {
  const [pic, setPic] = useState();

  function getImageUrl(base64Image) {
    if (!base64Image) {
      // Return a default or random URL if base64Image is not available
      // For example, you can replace the following line with your own logic
      return "https://example.com/default-image.jpg";
    }

    // Decode base64 to binary
    const binaryString = atob(base64Image);

    // Convert binary string to Uint8Array
    const binaryData = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      binaryData[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the binary data
    const blob = new Blob([binaryData], { type: "image/png" }); // Change the type accordingly

    // Create an object URL for the Blob
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  }

  useEffect(() => {
    // Example usage:
    const base64Image = info ? info.image : null; // Replace with your actual data
    const imageUrl = getImageUrl(base64Image);
    setPic(imageUrl);
    console.log(imageUrl);
  }, [info]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ThriveMind
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-7">
          <button
            onClick={createAcc}
            type="button"
            className=" text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-800">
            {myDid ? myDid : "Sign In"}
          </button>

          <Link href="/profile">
            <img
              src={
                pic
                  ? pic
                  : "https://t4.ftcdn.net/jpg/02/54/69/21/360_F_254692100_GdSqB6F8TkOUzpZrzxYu0xzAKit3jokp.jpg"
              }
              alt="Profile"
              className="w-8 h-8 rounded-full self-center ml-3 cursor-pointer"
              onClick={""}
            />
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500"
                aria-current="page">
                Home
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Profile
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
