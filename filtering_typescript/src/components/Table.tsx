import React, { useState } from "react";
import { data } from "../utils/data";
import { dataType } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Table = () => {
  const [projects, setProjects] = useState<dataType[]>(data);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [filters, setFilters] = useState<{
    name: string;
    country: string;
    email: string;
    projects: string;
    status: string;
  }>({
    name: "",
    country: "",
    email: "",
    projects: "",
    status: "",
  });

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [statusDropdownVisible, setStatusDropdownVisible] = useState<
  number | null
>(null);

  //sorting

  const sortProjects = (key: string): void => {
    let sortedProjects = [...projects];

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }
    setProjects(sortedProjects);
  };

  const handleSortOptionClick = (key: string): void => {
    setDropdownVisible(false);
    sortProjects(key);
  };

  // Action from table

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedProjects = projects.map((project, i) =>
      i === index
        ? {
            ...project,
            status: newStatus,
            progress: newStatus === "Completed" ? "100%" : project.progress,
          }
        : project
    );
    setProjects(updatedProjects);
    setStatusDropdownVisible(null);
  };

  // filteration

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProjects = projects.filter(
    (project) =>
      (searchQuery === "" ||
        Object.values(project).some((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
      (filters.name === "" ||
        project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.country === "" ||
        project.country
          .toLowerCase()
          .includes(filters.country.toLowerCase())) &&
      (filters.email === "" ||
        project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.projects === "" ||
        project.project
          .toLowerCase()
          .includes(filters.projects.toLowerCase())) &&
      (filters.status === "" ||
        project.status.toLowerCase().includes(filters.status.toLowerCase()))
  );

  //Pegination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* shorting */}

      <div className="flex items-center mb-5">
        <div className="relative">
          <button
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {/* dropdowncontent ; shorting  */}

          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Name
              </button>

              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Country
              </button>

              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>

        {/* Filters */}

        <div className="relative ml-4 w-full">
          <button
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <MdSort className="mr-[0.3rem]" />
            Filters
            <AiOutlineDown className="ml-2" />
          </button>
          {/* Filters dropdown*/}
          {filterVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
              <div className="mb-2">
                <label className="block text-white">Filter by Name:</label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>

              <div className="mb-2">
                <label className="block text-white">Filter by Country:</label>
                <input
                  type="text"
                  name="country"
                  value={filters.country}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>

              <div className="mb-2">
                <label className="block text-white">Filter by Email:</label>
                <input
                  type="text"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Project:</label>
                <input
                  type="text"
                  name="projects"
                  value={filters.projects}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Status:</label>
                <input
                  type="text"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
            </div>
          )}
        </div>
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
          {currentProjects.map((project, index) => (
            <tr key={index} className="border border-gray-700">
              <td className="px-4 py-2">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-[3rem] h-[3rem] object-cover rounded-full"
                />{" "}
              </td>
              <td className="px-4 py-2">{project.client}</td>
              <td className="px-4 py-2">{project.country}</td>
              <td className="px-4 py-2">{project.email}</td>
              <td className="px-4 py-2">{project.project}</td>

              <td className="px-4 py-2">
                <div className="w-24 h-2 bg-gray-700 rounded">
                  <div
                    style={{ width: `${parseInt(project.progress)}%` }}
                    className="h-2 bg-green-500 rounded"
                  ></div>
                </div>
              </td>

              <td className="px-4 py-2 w-[10rem]">
                <span
                  className={`${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  } p-1 rounded `}
                >
                  {project.status}
                </span>
              </td>

              <td className="px-4 py-2">{project.date}</td>

              <td className="px-4 py-2">
                <div className="relative">
                  <IoMdArrowDropdown
                    className="cursor-pointer"
                    onClick={() => setStatusDropdownVisible(index)}
                  />
                  {statusDropdownVisible === index && (
                    <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg">
                      <button
                        onClick={() => handleStatusChange(index, "In Progress")}
                        className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                      >
                        In Progress
                      </button>
                      <button
                        onClick={() => handleStatusChange(index, "Completed")}
                        className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                      >
                        Completed
                      </button>
                    </div>
                  )}
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}

      <div className="flex justify-end mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
