import React from 'react'

const MovieForm = ({setName, setRole, setRating, setPrice, name, role, rating, price, handleSave}) => {
  return (
    <>
      <h1>🎬 Movie Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="main-input"
        type="text"
        placeholder="Movie Title..."
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="selector"
      >
        <option value="🎬 Action">Action 🎬</option>
        <option value="😂 Comedy">Comedy 😂</option>
        <option value="🚀 Sci-Fi">Sci-Fi 🚀</option>
        <option value="👻 Horror">Horror 👻</option>
        <option value="🎭 Drama">Drama 🎭</option>
      </select>

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="main-input"
        type="number"
        placeholder="Ticket Price ($)..."
      />

      <p className="Rating-level">
        Rating: <span>⭐ {rating} / 5</span>
      </p>

      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min={0}
        max={5}
        type="range"
        className="range"
      />

      <button onClick={handleSave} className="create">
        ➕ Add Movie
      </button>
    </>
  )
}

export default MovieForm