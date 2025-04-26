import React from "react";

function Filter({ onSelect }) {
  return (
    <>
      <div className="filter-box-body">
        <div className="container">
          <div className="filter-box">
            <select
              className="w-full px-2 py-2 border-2 border-indigo-200 rounded-lg text-lg text-slate-50"
              onChange={(e) => onSelect(e.target.value)}
            >
              <option value={""} className="px-2 text-gray-900">
                All
              </option>
              <option value={"Food"} className="px-2 text-gray-900">
                Food
              </option>
              <option value={"Travel"} className="px-2 text-gray-900">
                Travel
              </option>
              <option value={"Cloath"} className="px-2 text-gray-900">
                Cloath
              </option>
              <option value={"Rent"} className="px-2 text-gray-900">
                Rent
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
