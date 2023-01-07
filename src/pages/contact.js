import React from "react";
import ContactForm from "../components/Contact";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Header from "../components/Header";

function Contact() {
  const user = useSelector(selectUser);

  return (
    <div className="bg-gray-400 h-screen w-full bg-cover bg-no-repeat">
      <Header isLogged={user ? "true" : "false"} />

      <ContactForm />
    </div>
  );
}

export default Contact;
