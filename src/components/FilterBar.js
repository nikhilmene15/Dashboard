import React from "react";
import Select from "react-select";
import { useDashboardData } from "../store/appContext";

const FilterBar = () => {
  const { filters, updateFilter } = useDashboardData();

  // Define the options for the category filter
  const categoryOptions = [
    { value: "", label: "All" },
    { value: "Tech", label: "Tech" },
    { value: "Fashion", label: "Fashion" },
  ];

  // Define the score range options
  const scoreRangeOptions = [
    { value: "0-1000", label: "0–1000" },
    { value: "1001-5000", label: "1001–5000" },
    { value: "5001-10000", label: "5001–10000" },
    { value: "10001-15000", label: "10001–15000" },
  ];

  const handleCategoryChange = (selectedOption) => {
    updateFilter("category", selectedOption.value);
  };

  const handleScoreRangeChange = (selectedOption) => {
    const [min, max] = selectedOption.value.split("-").map(Number);
    updateFilter("scoreRange", [min, max]);
  };

  return (
    <div className="filter-bar">
      <div className="mb-3">
        <label className="d-block mb-2">Category</label>
        <Select
          options={categoryOptions}
          value={categoryOptions.find((opt) => opt.value === filters.category)}
          onChange={handleCategoryChange}
        />
      </div>
      <div className="mb-3">
        <label className="d-block mb-2">Engagement Score Range</label>
        <Select
          options={scoreRangeOptions}
          value={scoreRangeOptions.find(
            (opt) => opt.value === filters.scoreRange.join("-")
          )}
          onChange={handleScoreRangeChange}
        />
      </div>
    </div>
  );
};

export default FilterBar;
