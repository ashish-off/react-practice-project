import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top mt-2">
          <li className="mb-4">
            <a href="#">
              <FaHome className="mr-2 mb-3" size={18} />
            </a>
          </li>

          <li className="mb-4">
            <a href="#">
              <FaUser className="mr-2 mb-3" size={18} />
            </a>
          </li>

          <li className="mb-4">
            <a href="#">
              <FaSearch className="mr-2 mb-3" size={18} />
            </a>
          </li>
        </div>

        <div className="bottom">
          <li>
            <a href="#">
              <IoMdSettings size={18} />
              <FaUser className="mt-5" size={18} />
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
