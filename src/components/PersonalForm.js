import { useWeb5 } from "@/app/web5Context";
import React, { useState } from "react";

export const PersonalForm = () => {
  const { createProfile } = useWeb5();

  // State to manage form data
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    profilePic: null, // Assuming you want to store the file in state
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or additional actions here
    createProfile(formData.userName, formData.name, formData.profilePic);
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
    <form className="w-full mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          class="relative block p-3 border-2 mt-5 border-gray-300 rounded"
          htmlFor="userName"
        >
          <span class="text-md font-semibold text-zinc-300" htmlFor="userName">
            Your username
          </span>

          <input
            type="text"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
            className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
            placeholder="Username"
          />
        </label>
      </div>

      <label
        class="relative block p-3 border-2 border-gray-300 rounded"
        htmlFor="name"
      >
        <span class="text-md font-semibold text-zinc-300" htmlFor="name">
         Your name
        </span>
        <input
          class="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
          type="file"
          id="profilePic"
          onChange={handleInputChange}
          required
        />
      </label>

      {/* <label htmlFor="profilePic" className="block pt-4">
        <span class="text-sm font-semibold text-zinc-500">
          Upload profile photo
        </span>
        <input
          type="file"
          id="profilePic"
          onChange={handleInputChange}
          required
          class="w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4 file:mt-2
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-700 file:text-white
      hover:file:bg-blue-900
      
    "
        />
      </label> */}

      <h1 class="text-1xl font-semibold mt-5">Interests :</h1>
      <p class="text-gray-300 text-sm font-normal flex gap gap-3 pt-2">
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          Mental Health
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          Academics
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          HealthCare
        </button>
      </p>

      <p class="text-gray-300 text-sm font-normal flex gap gap-3 pt-3">
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          Marriage
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          Relationships
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2 hover:border-gray-400">
          Other
        </button>
      </p>

      <button
        type="submit"
        class="mt-5 border-2 px-5 py-2 rounded-lg border-gray-300 border-b-4 font-white translate-y-2 border-l-4 hover:border-gray-500"
      >
        Submit
      </button>
    </form>
  );
};
