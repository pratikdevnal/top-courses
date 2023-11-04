import React from "react";

export const Filter = ({ filterData, setCategory, category }) => {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">
      {filterData.map((data) => {
        return (
          <div key={data.id}>
            <button
              className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 h-full ${
                category === data.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              }`}
              key={data.id}
              onClick={() => {
                setCategory(data.title);
              }}
            >
              {data.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};
