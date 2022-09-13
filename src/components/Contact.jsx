import React from "react";

const Contact = () => {
  return (
    <>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none text-white w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Full Name"
            aria-label="Full name"
          />
        </div>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Company"
            aria-label="Company"
          />
        </div>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Reason"
            aria-label="Reason"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-md border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
