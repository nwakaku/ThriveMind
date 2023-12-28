import { useWeb5 } from "@/app/web5Context";
import React, { useState } from "react";

export const PersonalForm = () => {
  const { createProfile } = useWeb5();

  // State to manage form data
  const [formData, setFormData] = useState({
    userName: "",
    profilePic: null, // Assuming you want to store the file in state
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or additional actions here
    createProfile(formData.userName, formData.profilePic);
    // Log the form data (replace this with your desired logic)
    console.log("Form Data:", formData);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { id, value, type, files } = event.target;

    // Update the form data based on input type
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your userName
        </label>
        <input
          type="text"
          id="userName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="stanley Mike"
          value={formData.userName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="profilePic"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your ProfilePic
        </label>
        <input
          type="file"
          id="profilePic"
          className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};
