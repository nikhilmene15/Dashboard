import React from "react";

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  const { name, likes, shares, comments, followers, category, location } = item;
  const engagementScore = likes + shares + comments;
  const reach = (followers * engagementScore) / 100;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-center">{name}</h2>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Engagement Score:</strong> {engagementScore}
        </p>
        <p>
          <strong>Reach:</strong> {reach.toLocaleString()}
        </p>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
        <p>
          <strong>Shares:</strong> {shares}
        </p>
        <p>
          <strong>Comments:</strong> {comments}
        </p>
        <p>
          <strong>Followers:</strong> {followers}
        </p>
      </div>
    </div>
  );
};

export default Modal;
