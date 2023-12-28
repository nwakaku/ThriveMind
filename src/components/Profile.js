import React from 'react';

export const Profile = ({ myDid, info }) => {
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

  // Example usage:
    const base64Image = info ? info.image : null ; // Replace with your actual data
  const imageUrl = getImageUrl(base64Image);
  console.log(imageUrl);


  console.log(info);
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button">
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imageUrl}
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {info ? info.username : null}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{myDid}</span>
      </div>
    </div>
  );
};
