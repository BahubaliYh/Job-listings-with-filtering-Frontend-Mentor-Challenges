import React from "react";

const JobBoardComponent = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 mx- m-4 p-6 rounded ${
        job.featured && "border-l-4 border-blue-500"
      } lg:flex-row lg:my-4`}
    >
      <div>
        <img
          className="w-20 h-20 -mt-16 mb-4 lg:h-24 lg:w-24 lg:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-500">
          {job.company}
          {job.new && (
            <span className="text-sm font-bold text-blue-500 bg-blue-200 px-2 py-1 m-2 rounded-full uppercase">
              New
            </span>
          )}
          {job.featured && (
            <span className="text-sm font-bold text-white bg-gray-800 px-2 py-1 m-2 rounded-full uppercase">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} &#183; {job.contract} &#183; {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t-2 border-gray-500 lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="bg-blue-100 font-bold text-blue-500 p-1 rounded mr-4 mb-4 lg:mb-0 cursor-pointer"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
