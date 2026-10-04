import React from "react";

const BookForm = ({
  setName,
  setRole,
  setPower,
  name,
  role,
  power,
  handleSave,
}) => {
  return (
    <>
      <h1>📚 Book Rating Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="main-input"
        type="text"
        placeholder="Book Title..."
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="selector"
      >
        <option value="📖 Fiction">Fiction 📖</option>
        <option value="🧠 Non-Fiction">Non-Fiction 🧠</option>
        <option value="🧙‍♂️ Fantasy/Sci-Fi">Fantasy/Sci-Fi 🧙‍♂️</option>
        <option value="🔪 Thriller">Thriller 🔪</option>
        <option value="📜 History">History 📜</option>
      </select>

      <p className="power-level">
        Rating: <span>⭐ {power} / 5</span>
      </p>

      <input
        value={power}
        onChange={(e) => setPower(e.target.value)}
        min={0}
        max={5}
        type="range"
        className="range"
      />

      <button onClick={handleSave} className="create">
        ➕ Add Book
      </button>
    </>
  );
};

export default BookForm;