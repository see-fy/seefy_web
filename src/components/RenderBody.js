import React, { useState } from "react";
import { HiBadgeCheck, HiLocationMarker } from "react-icons/hi";
import { HiShare } from "react-icons/hi";
import { HiInformationCircle, HiBriefcase } from "react-icons/hi";
import { HiCubeTransparent, HiFlag } from "react-icons/hi";
import moment from "moment";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { db } from "../firebase";

function RenderBody({
  title,
  cover,
  description,
  symptoms,
  timestamp,
  admin,
  profilePic,
  fullname,
  age,
  job,
  location,
  username,
  gender,
  docId,
  type,
}) {
  const [join, setJoin] = useState(true);
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  let style = {
    backgroundImage: "url(" + cover + ")",
  };

  const trunc = (str, limit) => {
    if (str?.length > limit) {
      return str.slice(0, limit);
    }
    return str;
  };

  const addMember = async () => {
    const loggedInProfile = await (
      await getDoc(doc(db, "users", user.uid))
    ).data();
    const docRef = collection(db, "users", type, "groups", docId, "members");

    await updateDoc(
      collection(docRef, docRef.id),
      {
        users: {
          [user.uid]: loggedInProfile,
        },
        usersId: arrayUnion(user.uid),
      },
      { merge: true }
    );
    setJoin(false);
  };

  const removeMember = async () => {
    const docRef = doc(db, "users", type, "groups", docId, "members");

    updateDoc(doc(docRef, docRef.id), {
      users: {
        [user.uid]: deleteField(),
      },
      usersId: arrayRemove(user.uid),
    });
    setJoin(true);
  };

  return (
    <div
      style={style}
      class="min-w-fit max-w-xs w-80 items-end justify-end flex flex-col h-[40rem] rounded-2xl shadow-xl"
    >
      <div class="h-[21rem] p-3  md:p-4 rounded-t-3xl rounded-b-2xl  opacity-90 bg-white w-full min-w-fit shadow-lg shadow-white">
        <div class="flex justify-between  space-x-4">
          <div class="">
            <p class="text-black text-2xl font-bold">
              {t(trunc(title, 15))}...
            </p>
            <p class="text-black text-xs mt-2 mb-2 text-center">
              {t("2016")} /\ {t(trunc(symptoms, 20))}... /\
              {t(trunc(moment(moment(timestamp.toDate())).fromNow(), 12))}
            </p>
            <div class="">
              <div class="mr-2">
                <img alt="" src={profilePic} class="h-14 w-14 rounded-3xl" />
              </div>
              <div>
                <div className="flex space-x-1 items-center">
                  <p class="text-black font-bold text-sm">{fullname}</p>
                  <HiBadgeCheck size={14} color="blue" className="-mb-1" />
                  <p class="text-black text-xs opacity-80">
                    {admin && t("(Admin)")}
                  </p>
                </div>
                <p class="text-black text-xs opacity-80">@{username}</p>
              </div>
            </div>
          </div>

          <div class=" items-center flex flex-col justify-center -mb-10">
            <div class="flex items-center justify-center">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="h-10 w-10 rounded-2xl -ml-10 "
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="h-10 w-10 rounded-2xl -mt-4"
              />
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              class="h-10 w-10 rounded-2xl -mt-4 -ml-4"
            />
          </div>
        </div>
        <div class="flex items-center justify-between mb-2 mt-3">
          <div class="flex  items-center">
            <HiCubeTransparent size={12} color="black" />
            <p class="text-black text-xs ml-1">
              {age}, {t(gender)}
            </p>
          </div>
          <div class="flex items-center">
            <HiBriefcase size={12} color="black" />
            <p class="text-black text-xs ml-1">{t(job)}</p>
          </div>
          <div class="flex flex-row items-center">
            <HiLocationMarker size={12} color="black" />
            <p class="text-black text-xs ml-1">{t(location)}</p>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <p class="my-2 text-black text-xs w-80  text-center">
            {t(trunc(description, 156))}...
          </p>
        </div>

        <div class="flex  items-end justify-between  mt-4">
          <div className="items-center justify-evenly space-x-8 flex">
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiInformationCircle size={20} color="black" />
              <p className="text-xs font-semibold">{t("Info")}</p>
            </div>
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiFlag size={20} color="black" />
              <p className="text-xs font-semibold">{t("Report")}</p>
            </div>
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiShare size={20} color="black" />
              <p className="text-xs font-semibold">{t("Share")}</p>
            </div>
          </div>
          <div>
            {join ? (
              <button
                className="text-xs font-semibold bg-slate-900 text-white p-2 w-20 rounded-lg text-center cursor-pointer"
                onClick={addMember}
              >
                {t("Join")}
              </button>
            ) : (
              <button
                className="text-xs font-semibold bg-slate-900 text-white p-2 w-20 rounded-lg text-center cursor-pointer"
                onClick={removeMember}
              >
                {t("Leave")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderBody;
