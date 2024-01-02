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
    <div
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1639054143259-7127619b32cb?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',  
      backgroundPosition: 'center', 
    }}
  >
    <div class="flex flex-col items-center pt-8 pb-5 w-full">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={imageUrl}
        alt="Bonnie image"
      />
      <h5 class="mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {info ? info.username : null}
      </h5>
  
      <span class="text-sm text-zinc-900 dark:text-zinc-900 font-semibold bg-white px-3 py-1 rounded-2xl">{myDid}</span>

      <p class="text-gray-200 text-sm font-normal flex gap gap-3 pt-4">
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2">
          Mental Health
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2">
          Academics
        </button>
        <button class="border-2 border-gray-300 rounded-md border-b-4 border-l-4 font-semibold px-2">
          HealthCare
        </button>
      </p>
    </div>
  </div>
  
  );
};
