import React from "react";
import Select from "react-select";
import { useDashboardData } from "../store/appContext";

const SortBar = () => {
  const { sort, updateSort } = useDashboardData();

  // Options for sorting (Sort by)
  const sortOptions = [
    { value: "", label: "None" },
    { value: "engagement", label: "Engagement" },
    { value: "reach", label: "Reach" },
  ];

  // Options for order (Ascending / Descending)
  const orderOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  // Handle change in sorting type (Engagement, Reach, etc.)
  const handleSortChange = (selectedOption) => {
    updateSort(selectedOption.value, sort.order);
  };

  // Handle change in order (Ascending / Descending)
  const handleOrderChange = (selectedOption) => {
    updateSort(sort.key, selectedOption.value);
  };

  return (
    <div className="sort-bar">
      <label className="d-block mb-3">
        <span className="mb-2 d-block"> Sort By:</span>
        <Select
          options={sortOptions}
          value={sortOptions.find((opt) => opt.value === sort.key)}
          onChange={handleSortChange}
          placeholder="Select Sorting"
        />
      </label>
      <label className="d-block mb-3">
        <span className="mb-2 d-block">Order:</span>
        <Select
          options={orderOptions}
          value={orderOptions.find((opt) => opt.value === sort.order)}
          onChange={handleOrderChange}
          placeholder="Select Order"
        />
      </label>
    </div>
  );
};

export default SortBar;
