import React from 'react'

const HeroForm = ({setName, setRole, setPower, name, role, power, handleSave}) => {
  return (
    <>
    <h1>🎮Character Collector</h1>

          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="main-input"
            type="text"
            placeholder="Character Name..."
          />

          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="selector"
          >
            <option className="options" value="🦸‍♂️">
              Hero 🦸‍♂️
            </option>
            <option className="options" value="🦹‍♂️">
              Villain 🦹‍♂️
            </option>
            <option className="options" value="👾">
              Monster 👾
            </option>
          </select>

          <p className="power-level">
            Power Level: <span>{power}</span>
          </p>

          <input
            value={power}
            onChange={(e) => {
              setPower(e.target.value);
            }}
            min={0}
            max={100}
            type="range"
            className="range"
          />

          <button onClick={handleSave} className="create">
            ➕Create Character
          </button>
    </>
  )
}

export default HeroForm