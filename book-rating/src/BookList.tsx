import React from "react";

const BookList = ({ bookList, handleDelete }) => {
  return (
    <>
      <h1 className="deck">Your Library</h1>
      {bookList.map((item, index) => {
        console.log("this is item", item);
        return (
          <div className="deck-card" key={index}>
            <div className="deck-card-header">
              <h2>
                {item.Name} ({item.Role})
              </h2>
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                🗑️
              </button>
            </div>
            <p className="power-text">
              <strong>Rating:</strong> ⭐ {item.Power}/ 5
            </p>
          </div>
        );
      })}
    </>
  );
};

export default BookList;