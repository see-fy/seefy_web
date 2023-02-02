import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { doc, serverTimestamp, setDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

Modal.setAppElement("#root");

const ModalPop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const fullnameRef = useRef(null);
  const usernameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const jobRef = useRef(null);
  const bioRef = useRef(null);
  const genderRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (snapshot.exists()) {
          navigate("/");
        }
      }),
    [navigate, user.uid]
  );

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const createProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      fullname: fullnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value || user.email,
      age: ageRef.current.value,
      bio: bioRef.current.value,
      location: locationRef.current.value,
      gender: genderRef.current.value,
      job: jobRef.current.value,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        setIsOpen(false);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="">
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white rounded-lg px-4 py-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <form>
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-xl leading-9 font-bold text-gray-900">
                  Create Your Profile
                </h2>
                <p className="mb-2 text-xs leading-5 text-gray-600">
                  Please enter your personal information to create your profile.
                </p>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Your Full Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    type="text"
                    name="fullname"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={fullnameRef}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Your Username
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={usernameRef}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={emailRef}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Age
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="age"
                    type="number"
                    name="age"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={ageRef}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="gender"
                    type="text"
                    name="gender"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={genderRef}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Job
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="job"
                    type="text"
                    name="job"
                    ref={jobRef}
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Where do you live?
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="form-input py-1 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                    required
                    ref={locationRef}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Bio
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="bio"
                    name="bio"
                    rows="3"
                    ref={bioRef}
                    className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 outline-none border cursor-pointer"
                  ></textarea>
                </div>
              </div>

              <div className="mt-2">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    onClick={createProfile}
                    type="submit"
                    className="w-full flex justify-center text-xs py-2 px-4 leading-5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
                  >
                    Create Profile
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <button
        onClick={closeModal}
        className="cursor-pointer z-40 absolute top-4 right-4 bg-red-300 p-2 w-14 h-14  rounded-full "
      >
        Close
      </button>
    </Modal>
  );
};

export default ModalPop;
