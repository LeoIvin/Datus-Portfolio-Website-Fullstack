import React from "react";

function Form() {
  return (
    <div className="">
        <form className="max-w-sm mx-auto mb-16 mt-11">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-ibm-plex-sans"
        >
        Full name
        </label>
        <input
          type="name"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 dark:shadow-sm-light"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-ibm-plex-sans"
        >
        Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 dark:shadow-sm-light"
          placeholder="name@datus.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-ibm-plex-sans"
        >
        Phone Number
        </label>
        <input
          type="phone"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 dark:shadow-sm-light"
          placeholder="Optional"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-ibm-plex-sans"
        >
        Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-ibm-plex-sans"
      >
        Submit
      </button>
    </form>
    </div>
    
  );
}

export default Form;
