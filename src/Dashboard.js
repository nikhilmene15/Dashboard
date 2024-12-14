import React, { useMemo } from "react";
import Card from "./components/Card";

import { useDashboardData } from "./store/appContext";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import Modal from "./components/Modal";

const Dashboard = () => {
  const { items, filters, sort, modalItem, setModalItem } = useDashboardData();

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        (!filters.category || item.category === filters.category) &&
        item.likes + item.shares + item.comments >= filters.scoreRange[0] &&
        item.likes + item.shares + item.comments <= filters.scoreRange[1]
    );
  }, [items, filters]);

  // Memoized sorted items
  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (!sort.key) return 0;
      const keyA =
        sort.key === "engagement"
          ? a.likes + a.shares + a.comments
          : (a.followers * (a.likes + a.shares + a.comments)) / 100;
      const keyB =
        sort.key === "engagement"
          ? b.likes + b.shares + b.comments
          : (b.followers * (b.likes + b.shares + b.comments)) / 100;
      return sort.order === "asc" ? keyA - keyB : keyB - keyA;
    });
  }, [filteredItems, sort]);

  const handleViewDetails = (item) => {
    setModalItem(item);
  };

  return (
    <section className="position-relative dashborad_wrapper">
      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-md-3">
            <div className="categoery_wrapper">
              <FilterBar />
              <SortBar />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row justify-content-center  ">
              {sortedItems.map((item) => (
                <div className="col-md-6">
                  <Card
                    key={item.id}
                    item={item}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalItem && (
          <Modal item={modalItem} onClose={() => setModalItem(null)} />
        )}
      </div>
    </section>
  );
};

export default Dashboard;
