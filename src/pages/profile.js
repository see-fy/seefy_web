import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import {
  doc,
  onSnapshot,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

function UserProfilePage() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const fullnameRef = useRef(null);
  const usernameRef = useRef(null);
  const ageRef = useRef(null);
  const picRef = useRef(null);
  const emailRef = useRef(null);
  const jobRef = useRef(null);
  const bioRef = useRef(null);
  const genderRef = useRef(null);
  const locationRef = useRef(null);
  const [showSettings, setShowSettings] = useState(false);
  const [profile, setProfile] = useState([]);

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

  const editProfile = () => {
    updateDoc(doc(db, "users", user.uid), {
      id: user.uid,
      fullname: fullnameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value || user.email,
      age: ageRef.current.value,
      bio: bioRef.current.value,
      location: locationRef.current.value,
      gender: genderRef.current.value,
      profilePic: picRef.current.value,
      job: jobRef.current.value,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        console.log("====================================");
        console.log("Updated...");
        console.log("====================================");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("====================================");
        console.log("User out");
        console.log("====================================");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen w-full items-center  flex flex-col  bg-gray-500">
      <div className="container min-h-screen min-w-full bg-slate-900">
        <div className="flex flex-col items-center">
          <div className="relative rounded-full shadow-lg">
            {/* Profile picture goes here */}
            <img
              src="https://images.unsplash.com/photo-1551847533-7d438a3c15da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="h-[14rem] w-screen object-cover"
            />
            <div
              className="absolute bottom-0 left-0 mb-4 ml-4 flex items-center justify-center rounded-full shadow-md cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="https://i.imgur.com/dLotCPd.png"
                alt="Logo"
                className="h-14 md:h-20"
              />
              <h1 className="text-white font-bold text-2xl md:text-4xl -ml-3 -mb-4 md:-ml-6 md:-mb-8">
                Seefy
              </h1>
            </div>
            <div className="absolute bottom-0 right-28 mb-4 mr-6 bg-red-800 rounded-full shadow-md">
              <button
                onClick={logout}
                className="focus:outline-none hover:bg-gray-300 hover:text-gray-800 p-2 rounded-full text-white cursor-pointer font-semibold w-28"
              >
                Sign Out
              </button>
            </div>
            <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-white rounded-full shadow-md">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="focus:outline-none hover:bg-gray-300 hover:text-gray-800 p-2 rounded-full cursor-pointer font-semibold w-28"
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mt-4 w-full p-10">
            <h1 className="text-2xl font-bold text-white">
              {profile.fullname}
            </h1>
            <h1 className="text-sm text-white mt-2">@{profile.username}</h1>
            <div className="text-gray-400 text-sm mt-2 ">
              {profile.age}, {profile.gender}
            </div>
            <h1 className="text-sm text-gray-400 mt-2">{profile.email}</h1>
            <div className="text-gray-400 text-sm mt-2 ">
              {profile.location}
            </div>
            <div className="text-gray-400 text-sm mt-2 ">{profile.job}</div>
            <div className="text-gray-400 text-sm mt-2 w-80 mb-2 ">
              {profile.bio}
            </div>
          </div>
          <div className="h-full w-full p-10">
            {showSettings && (
              <div className="mt-12 w-full lg:w-[50rem]">
                <div className="bg-white rounded-lg shadow-lg p-4 settings-section">
                  <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Your Full Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      defaultValue={profile.fullname}
                      ref={fullnameRef}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Your Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="username"
                      defaultValue={profile.username}
                      ref={usernameRef}
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="number"
                      name="age"
                      defaultValue={profile.age}
                      ref={ageRef}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="eamil"
                      name="email"
                      defaultValue={profile.email}
                      ref={emailRef}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="profilePic"
                    >
                      Your profile Picture URL(paste it here)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="profilePic"
                      type="text"
                      name="profilePic"
                      defaultValue={profile.profilePic}
                      ref={picRef}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="location"
                      type="text"
                      name="location"
                      defaultValue={profile.location}
                      ref={locationRef}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="location"
                    >
                      Job
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="job"
                      type="text"
                      name="job"
                      defaultValue={profile.job}
                      ref={jobRef}
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="bio"
                    >
                      Bio
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="bio"
                      name="bio"
                      defaultValue={profile.bio}
                      ref={bioRef}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="gender"
                      type="text"
                      name="gender"
                      defaultValue={profile.gender}
                      ref={genderRef}
                    />
                  </div>

                  <div className="mt-4">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        onClick={editProfile}
                        type="submit"
                        className="w-full flex justify-center text-xs py-1 px-4 leading-5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
                      >
                        Update Profile
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfilePage;
