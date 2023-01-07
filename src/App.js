import React, { useEffect, useState } from "react";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Search from "./pages/search";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Modal from "./pages/modal";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./slices/userSlice";
import Message from "./pages/message";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          loginUser({
            uid: user.uid,
            email: user.email,
          })
        );
        setLoading(true);
      } else {
        dispatch(logoutUser());
        setLoading(true);
      }
    });
    return unsub;
  }, [dispatch]);

  if (!loading) {
    return (
      <div className=" flex items-center justify-center bg-slate-900 h-screen">
        <img
          src="https://i.imgur.com/dLotCPd.png"
          alt=""
          className="h-28 rounded-full"
        />
        <h1 className="text-white font-semibold text-4xl">
          Share your problem with others....
        </h1>
      </div>
    );
  }

  return (
    <div class="bg-slate-900" style={{ backgroundColor: "whitesmoke" }}>
      <Routes>
        {user && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/messages" element={<Message />} />
          </>
        )}
        {!user && (
          <>
            <Route path="landing" element={<Landing />} />
            <Route path="login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<Navigate to={user ? "/" : "landing"} />} />
      </Routes>
    </div>
  );
}

export default App;
