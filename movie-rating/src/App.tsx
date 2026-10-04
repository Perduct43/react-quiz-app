import { useState } from "react";
import "./App.css";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("🎬 Action");
  const [rating, setRating] = useState("0");
  const [price, setPrice] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSave = () => {
    setMovieList([
      ...movieList,
      { Name: name, Role: role, Rate: rating, Price: price },
    ]);
  };

  const handleDelete = (index) => {
    setMovieList(movieList.filter((item, idx) => idx !== index));
  };

  return (
    <>
      <div className="card">
        <div className="create-character-div">
          <MovieForm
            setName={setName}
            setPower={setRating}
            setRole={setRole}
            setPrice={setPrice}
            role={role}
            power={rating}
            price={price}
            name={name}
            handleSave={handleSave}
          />
          <MovieList movieList={movieList} handleDelete={handleDelete} price={price} />
        </div>
      </div>
    </>
  );
};

export default App;
