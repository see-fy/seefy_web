import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import axios from "axios";
import {
  serverTimestamp,
  setDoc,
  onSnapshot,
  doc,
  collection,
  addDoc,
  arrayUnion,
} from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Issuefy() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const symptomsRef = useRef(null);
  const coverRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile, setProfile] = useState([]);
  const { t } = useTranslation();

  useEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.data());
          console.log("Document data:", snapshot.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }),
    [user.uid]
  );

  function handleKeyUp() {
    let inputValue = symptomsRef.current.value;
    inputValue = inputValue.replace(/[ ,]/g, "-");
    symptomsRef.current.value = inputValue;
  }

  const createIssue = async () => {
    const docRef = await addDoc(collection(db, "users", user.uid, "groups"), {
      type: user.uid,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      admin: true,
      cover: selectedImage,
      age: profile.age,
      gender: profile.gender,
      job: profile.job,
      location: profile.location,
      fullname: profile.fullname,
      profilePic: profile.profilePic,
      username: profile.username,
      symptoms: symptomsRef.current.value,
      timestamp: serverTimestamp(),
    });
    let aid = user.uid;
    await addDoc(
      collection(db, "users", user.uid, "groups", docRef.id, "members"),
      {
        users: {
          [aid]: profile,
        },
        usersId: arrayUnion(aid),
        timestamp: serverTimestamp(),
      }
    );
    navigate("/");
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: searchTerm,
        client_id: "7OZll_T95JDh7yscZhIIpIHKJrdxjE4As4ikeP7lGxY",
      },
    });
    setImages(response.data.results.length ? response.data.results : []);
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image.urls.full);
    console.log(image);
  };

  return (
    <div className="min-h-screen h-full w-full items-center justify-center  flex flex-col  bg-gray-500">
      <Header isLogged={user ? "true" : "false"} />
      <div className="mb-20 mt-40 w-full min-w-fit max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-4 settings-section space-y-10">
          <h2 className="text-lg font-bold mb-4">{t("Create a new Issue")}</h2>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              {t(
                " What would like to call the issue (Be it a meaning full title)"
              )}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              ref={titleRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="symptoms"
            >
              {t("Give us three words that describe best your issue")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="symptoms"
              type="text"
              name="symptoms"
              ref={symptomsRef}
              onKeyUp={handleKeyUp}
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              {t(
                "Your message for anyone who is joining the group or a small description of the issue"
              )}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
              id="description"
              type="text"
              name="description"
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cover"
            >
              {t("Pick a cover image for your issue")}
            </label>
            <form
              onSubmit={handleSearch}
              className="items-center justify-center flex flex-col"
            >
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cover"
                type="text"
                name="cover"
                placeholder={t(
                  "Search here for images, type the name of the issue for example or anything"
                )}
                ref={coverRef}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button
                type="submit"
                className="w-28 text-center text-white text-xs font-semibold bg-slate-900 mt-3 mb-2 rounded p-2"
              >
                {t("Search")}
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {images.map((image) => (
              <img
                className="h-44 w-44 rounded cursor-pointer"
                key={image.id}
                src={image.urls.full}
                onClick={() => handleSelectImage(image)}
                alt=""
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center my-2">
            <p className="mb-4 text-sm font-semibold text-center">
              {t("The image you selected appears down here")}
            </p>
            {selectedImage && (
              <img src={selectedImage} className="rounded h-28 w-28" alt="" />
            )}
          </div>
          <div className="mt-4">
            <span className="rounded-md shadow-sm items-center flex justify-center">
              <button
                onClick={createIssue}
                type="submit"
                className="w-40 flex justify-center text-xs py-2 px-4 leading-5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
              >
                {t("Add a new issue")}
              </button>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Issuefy;
