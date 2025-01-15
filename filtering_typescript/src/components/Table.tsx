import React, { useState } from "react";
import { data } from "../utils/data";
import { dataType } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const Table = () => {
  const [projects, setProjects] = useState<dataType[]>(data);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* shorting */}

      <div className="flex items-center mb-5">
        <button
          className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <BiSort className="mr-[0.3rem]" />
          Sort
          <AiOutlineDown className="ml-2" />
        </button>
        {/* dropdowncontent  */}

        {dropdownVisible && (
          <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">

            <button
              onClick={() => handleSortOptionClick("client")}
              className="block px-4 py-2 text-white w-full hover:bg-gray-700"
            >
              Name
            </button>
            
          </div>
        )}
      </div>
      {/* Main table */}

      <table className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border border-gray-700">
            <td className="px-4 py-2">
              {" "}
              <img src={projects.image} alt={projects.clients} />{" "}
            </td>
            <td className="px-4 py-2">{projects.client}</td>
            <td className="px-4 py-2">{projects.country}</td>
            <td className="px-4 py-2">{projects.email}</td>
            <td className="px-4 py-2">{projects.project}</td>
          </tr>
        </tbody>
      </table>

      {/* Pagination */}

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Previous
        </button>

        <span className="px-4 py-2 text-white">Page 1 of 4</span>

        <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
