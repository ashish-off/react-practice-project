import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://placeholder.pics/svg/1500x400"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://placeholder.pics/svg/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Background"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-8 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            className="hidden"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* profile */}

      <div className="flex items-center ml-4 mt-[2rem]">
        {/* <div className="w-44 h-44 rounded-full border-4 border-gray-600 relative overflow-hidden"> */}
        <img
          src={profileUrl}
          alt="Channel Logo"
          className="w-40 h-40  object-cover rounded-full border-4 border-white relative"
        />

          
        <button className="absolute  ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            className="hidden"
            accept="image/*"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-0">
          <h1 className="text-3xl font-bold">Ashish Saud</h1>
          <p>10M subscribers • 100 videos</p>
          <p className="mt-2">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
