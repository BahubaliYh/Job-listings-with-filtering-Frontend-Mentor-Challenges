import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-blue-300 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex flex-wrap bg-white shadow-md -my-20 mb-16 mx-10 mx- m-4 p-6 rounded relative z-10">
            {filters.map((filter) => (
              <span className="font-bold text-blue-500 p-1 rounded mr-4 mb-4 lg:mb-0 ">
                <span className="bg-blue-100 font-bold text-blue-500 p-1 rounded">
                  {filter}
                </span>
                <span
                  className="bg-blue-400 font-bold text-blue-800 p-1 px-2 cursor-pointer"
                  onClick={() => handleFilterClick(filter)}
                >
                  &#10005;
                </span>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto"
            >
              Clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p>Jobs Are Fetching....</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
