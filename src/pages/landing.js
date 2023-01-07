import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function Landing() {
  const user = useSelector(selectUser);

  return (
    <div>
      {/* navbar */}
      <Header isLogged={user ? "true" : "false"} />
      {/* banner */}
      <Banner />
      {/* movies in a row  */}
      <Footer />
    </div>
  );
}

export default Landing;
