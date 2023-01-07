import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [clear, setClear] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lb9y4ne",
        "template_2dg8kv6",
        form.current,
        "z0hgKqiNH7YV3emo2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setClear(true);
  };
  setTimeout(() => {
    setClear(false);
  }, 8000);

  return (
    <div className="bg-gray-500 h-screen w-full flex flex-col items-center  justify-center">
      <h1 className="text-white mb-2 font-semibold text-4xl text-center">
        Please Fill this form to send your message
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 items-center justify-center bg-slate-900 p-10 w-96 xl:w-[40rem] rounded-lg my-10"
      >
        <input
          type="text"
          name="user_name"
          required
          className="w-80 xl:w-[30rem] rounded-lg p-1 h-10 outline-none"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="user_email"
          required
          className="w-80 xl:w-[30rem] rounded-lg p-1 h-10 outline-none"
          placeholder="Enter your email address"
        />
        <input
          type="number"
          name="user_phone"
          className="w-80 xl:w-[30rem] rounded-lg p-1 h-10 outline-none"
          placeholder="Enter your phone number"
        />
        <textarea
          name="message"
          required
          className="w-80 xl:w-[30rem] rounded-lg p-1 h-40 outline-none"
          placeholder="Type in your message here"
        />
        <input
          type="submit"
          value="Send"
          className="w-40 text-center bg-red-900 rounded-2xl h-10 text-white font-bold text-xl p-1 cursor-pointer"
        />

        {clear ? (
          <p className="text-white text-sm font-semibold text-center w-80 xl:w-[30rem]">
            Thank you!!! Your Message has been successfully sent. I will contact
            you soon.
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Contact;
