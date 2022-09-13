import React, { useEffect, useState } from "react";
import Requests from "../utils/requests";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  var x = 0;

  useEffect(() => {
    const changeToFalse = setTimeout(() => {
      setIsSubmit(false);
      setIsInProgress(false);
      x = 0;
    }, 2000);

    return () => clearTimeout(changeToFalse);
  }, [isSubmit]);

  const handleSubmit = () => {
    if (!name || !email) return;
    setIsInProgress(true);
    var id = setInterval(() => {
      if (x >= 100) {
        clearInterval(id);
      }
      setProgress(x);
      x += 5;
    }, 50);
    const request = new Requests();
    const data = {
      user_name: name.toString(),
      user_email: email,
      user_company: company,
      user_reason: reason,
    };
    request.post("/test", JSON.stringify(data)).then(() => {
      setIsSubmit(true);
    });
  };

  return (
    <>
      <form
        className="w-full max-w-sm"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none text-white w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Full Name"
            aria-label="Full name"
            name="fullName"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email"
            aria-label="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Company"
            aria-label="Company"
            name="company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            value={company}
          />
        </div>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Reason"
            aria-label="Reason"
            name="reason"
            onChange={(e) => {
              setReason(e.target.value);
            }}
            value={reason}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-md border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <span> {isSubmit ? "✓" : "Send"}</span>
          </button>
        </div>

        {isInProgress && (
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 mt-4 w-0 rounded-full"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        )}
      </form>
    </>
  );
};

export default Contact;
