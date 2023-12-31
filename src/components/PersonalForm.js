import { useWeb5 } from "@/app/web5Context";
import React, { useState } from "react";

export const PersonalForm = () => {
  const { createProfile } = useWeb5();

  // State to manage form data
  const [formData, setFormData] = useState({
    userName: "",
    profilePic: null,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    createProfile(formData.userName, formData.profilePic);

    setFormSubmitted(true);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { id, value, type, files } = event.target;

    // Update the form data based on input type
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? files[0] : value,
    }));

    setFormSubmitted(false);
  };

  if (formSubmitted) {
    return null;
  }

  return (
    <form className="w-full mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          class="relative block p-3 border-2 mt-5 border-gray-300 rounded"
          htmlFor="userName">
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
        htmlFor="name">
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
        class="mt-5 border-2 px-5 py-2 rounded-lg border-indigo-400 border-b-4 font-white translate-y-2 border-l-4 hover:border-indigo-500">
        Submit
      </button>
    </form>
  );
};
