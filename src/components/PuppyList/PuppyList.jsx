import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PuppyList() {
  const [puppies, setPuppies] = useState([]);
  const [displayedPuppies, setDisplayedPuppies] = useState([]);
  useEffect(() => {
    axios("https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players")
      .then((data) => {
        console.log("Players data", data.data.data.players);
        setPuppies(data.data.data.players);
        setDisplayedPuppies(data.data.data.players);
      })
      .catch((err) => console.error(err));
  }, []);
  const handleInput = (e) => {
    const results = puppies.filter((puppy) =>
      puppy.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayedPuppies(results);
  };

  return (
    <>
      <label>
        <input type="text" placeholder="Search" onChange={handleInput} />
      </label>
      <div className="puppy-container">
        {displayedPuppies.map((puppy) => (
          <Puppy key={puppy.id} puppy={puppy} />
        ))}
      </div>
    </>
  );
}
function Puppy({ puppy }) {
  return (
    <>
      <Link to={`/puppies/details/${puppy.id}`}>
        <div className="puppy-list">
          <img
            src={puppy.imageUrl}
            alt={puppy.name}
            style={{ width: "200px", height: "auto" }}
          />
          <p>{puppy.name}</p>
          <p>{puppy.breed}</p>
          <p>{puppy.status}</p>
        </div>
      </Link>
    </>
  );
}

export default PuppyList;
