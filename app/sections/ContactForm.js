"use client";
import React, { useState } from "react";
import Form from "next/form";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isEmpty = (value) => value.trim() === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsLoading(true);

    const portalId = "25647202";
    const formId = "d1ffb0a0-82f0-453b-b041-ed3dfefaa27e";

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const submissionData = {
      fields: [
        { name: "fullname", value: fullName },
        { name: "email", value: email },
        { name: "phone", value: phoneNumber },
        { name: "message", value: message },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus(
          "Thank you for connecting with us. Our team will be reaching out to you soon.",
        );

        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");

        setTouched({
          fullName: false,
          email: false,
          phoneNumber: false,
          message: false,
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Try again later.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="lg:w-1/2 w-full">
        <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="fullname"
            value={fullName}
            placeholder="FULL NAME"
            onBlur={() => handleBlur("fullName")}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
              setFullName(e.target.value);
            }}
            required
          />
          {touched.fullName && isEmpty(fullName) && (
            <p className="text-[#ff1d48] text-xs mt-1">
              Please complete this required field.
            </p>
          )}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="EMAIL ADDRESS"
            onBlur={() => handleBlur("email")}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {touched.email && isEmpty(email) && (
            <p className="text-[#ff1d48] text-xs mt-1">
              Please complete this required field.
            </p>
          )}
          <input
            name="phone"
            value={phoneNumber}
            type="tel"
            placeholder="PHONE NUUMBER"
            onBlur={() => handleBlur("phoneNumber")}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
              setPhoneNumber(e.target.value);
            }}
            required
          />
          {touched.phoneNumber && isEmpty(phoneNumber) && (
            <p className="text-[#ff1d48] text-xs mt-1">
              Please complete this required field.
            </p>
          )}
          <textarea
            rows="5"
            cols="50"
            name="message"
            value={message}
            placeholder="FITNESS GOALS"
            onBlur={() => handleBlur("message")}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {touched.message && isEmpty(message) && (
            <p className="text-[#ff1d48] text-xs mt-1">
              Please complete this required field.
            </p>
          )}

          {/* <button
            type="submit"
            disabled={isLoading}
            className="text-xs font-semibold inline-flex justify-center items-center gap-3 cursor-pointer uppercase rounded-sm
             text-white bg-[#1E1E1E] hover:bg-[#1E1E1E]/80 hover:text-white/80 focus:text-white/80 border border-white disabled:bg-[#FFFFFF1A] 
             h-12 w-full px-4 mt-5 ease-in-out duration-300 transition-all"
          >
            {isLoading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              <>Request Membership Information</>
            )}
          </button> */}

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center items-center gap-3 cursor-pointer w-full
              uppercase rounded-sm text-btn font-semibold tracking-widest text-white disabled:bg-[#FFFFFF1A] 
              bg-transparent hover:bg-[#c2e53a] hover:text-[#0f0f0f] focus:text-[#0f0f0f] focus:bg-[#c2e53a]
              border border-[#B8B8B880] h-[44px] 
              px-4 mt-5 ease-in-out duration-300 transition-all"
          >
            {isLoading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              <>Request Membership Information</>
            )}
          </button>
        </Form>

        {status && <p className="mt-2 text-sm text-white">{status}</p>}
      </div>
    </>
  );
}
