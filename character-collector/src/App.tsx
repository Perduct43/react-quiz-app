import { useState } from "react";
import "./App.css";
import HeroForm from "./HeroForm";
import HeroList from "./HeroList";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [power, setPower] = useState("");
  const [heroList, setHeroList] = useState([{}]);
  console.log(heroList);

  const handleSave = () => {
    setHeroList([...heroList, { Name: name, Role: role, Power: power }]);
  };

  const handleDelete = (index) => {
    setHeroList(heroList.filter((item, idx)=>idx !== index))
  }
  return (
    <>
      <div className="card">
        <div className="create-character-div">
          < HeroForm setName={setName} setPower={setPower} setRole={setRole} role={role} power={power} name={name} handleSave={handleSave} />
          < HeroList heroList={heroList} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default App;
