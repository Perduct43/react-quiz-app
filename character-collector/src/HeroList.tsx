import React from 'react'

const HeroList = ({heroList, handleDelete}) => {
  return (
    <>
    <h1 className="deck">Your Deck</h1>
          {heroList.map((item, index) => {
            console.log("this is item", item)
            return(<div className="deck-card">
              <div className="deck-card-header">
                <h2>
                  {item.Name} {item.Role}
                </h2>
                <button onClick={()=>handleDelete(index)} className="delete-btn">🗑️</button>
              </div>
              <p className="power-text">
                <strong>Power Level:</strong> ⚡{item.Power}/ 100
              </p>
            </div>)
          })}
    </>
  )
}

export default HeroList