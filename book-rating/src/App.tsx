import { useState } from "react";
import "./App.css";
import BookForm from "./BookForm";
import BookList from "./BookList";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("📖 Fiction");
  const [power, setPower] = useState("3");
  const [bookList, setBookList] = useState([]);

  const handleSave = () => {
    setBookList([...bookList, { Name: name, Role: role, Power: power }]);
  };

  const handleDelete = (index) => {
    setBookList(bookList.filter((item, idx) => idx !== index));
  };

  return (
    <div className="card">
      <div className="create-character-div">
        <BookForm
          setName={setName}
          setPower={setPower}
          setRole={setRole}
          role={role}
          power={power}
          name={name}
          handleSave={handleSave}
        />
        <BookList bookList={bookList} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;