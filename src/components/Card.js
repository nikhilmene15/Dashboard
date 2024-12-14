import React from "react";

const Card = ({ item, onViewDetails }) => {
  const engagementScore = item.likes + item.shares + item.comments;
  const reach = (item.followers * engagementScore) / 100;

  return (
    <div className="card">
      <h3 className="text-center">{item.name}</h3>
      <p>
        Category: <span>{item.category}</span>
      </p>
      <p>
        Location: <span> {item.location}</span>{" "}
      </p>
      <p>
        Engagement Score: <span>{engagementScore}</span>{" "}
      </p>
      <p>
        Reach: <span>{reach}</span>{" "}
      </p>
      <button onClick={() => onViewDetails(item)}>View Details</button>
    </div>
  );
};

export default Card;
