import React from 'react'

const MovieList = ({movieList, handleDelete, price}) => {
  return (
    <>
    <h1 className="deck">Your Movies</h1>
          {movieList.map((item, index) => {
            console.log("this is item", item)
            return(<div className="deck-card">
              <div className="deck-card-header">
                <h2>
                  {item.Name} ({item.Role})
                </h2>
                <button onClick={()=>handleDelete(index)} className="delete-btn">🗑️</button>
              </div>
              <p className="power-text">
                <strong>Rating:</strong> {price} ⭐ {item.Power}/ 5
              </p>
              <p className="power-text">
                <strong>Ticket Price:</strong> ${item.Price}
              </p>
            </div>)
          })}
    </>
  )
}

export default MovieList