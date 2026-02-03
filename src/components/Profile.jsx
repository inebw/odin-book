import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router";
import useGetUserByUsername from "../utils/useGetUserByUserName";

export default function Profile() {
  const { url, user, socket } = useOutletContext();
  const { username } = useParams()
  const { profile, loading, error } = useGetUserByUsername(url, username)
  const navigate = useNavigate()

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 flex-1 rounded-md  overflow-y-auto custom-scrollbar">
      <div className="dark:border-d3 border-l3 border rounded-md p-2 pb-18 sm:pb-28 lg:pb-40 overflow-x-clip ">
        <div className="relative">
          <img className="w-full object-cover rounded-md h-[20vh]" src={`https://static.photos/gradient/640x360/${profile.username}`} alt="" />
          <img className="absolute bottom-0 left-5 sm:left-10 lg:left-20 translate-y-[55%] size-28 sm:size-42 lg:size-64 rounded-full " src={profile.dp} alt="" />
          <div className="absolute bottom-0 left-35 sm:left-55 lg:left-88 translate-y-[102%]  sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate w-full tracking-wide">{profile.first_name} {profile.last_name}</h1>
            <div className="flex gap-2 translate-0 origin-top-left scale-60 sm:scale-60 md:scale-85  lg:scale-90 xl:scale-100 ">
              <button
                onClick={() => navigate('followers')}
                className="flex gap-2 w-min bg-green font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5">
                <p className="hover:underline">Followers</p>
                <p >{profile._count.follwers}</p>
              </button>
              <button
                onClick={() => navigate('following')}
                className="flex gap-2 w-min bg-yello font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5">
                <p className="hover:underline">Following</p>
                <p>{profile._count.following}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={{ profile, url, user, socket }} />
    </div>
  )

}
