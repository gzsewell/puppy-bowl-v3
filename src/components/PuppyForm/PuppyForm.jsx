import React, { useEffect, useState } from "react";
import axios from "axios";

function PuppyForm({ submitFunction }) {
  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [puppyTeam, setPuppyTeam] = useState("");
  const [puppyImage, setPuppyImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPuppy = {
      name: puppyName,
      breed: puppyBreed,
      team: puppyTeam,
      imageUrl: puppyImage,
    };
    try {
      const response = await axios.post(
        "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players",
        newPuppy
      );
      console.log("Puppy Added:", response.data);

      if (submitFunction) {
        submitFunction(response.data);
      }

      setPuppyName("");
      setPuppyBreed("");
      setPuppyTeam("");
      setPuppyImage("");
    } catch (error) {
      console.error("Error adding puppy:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add a puppy the Puppy Bowl!</h2>
      <label>
        <h2>Puppy Name</h2>
        <input
          type="text"
          value={puppyName}
          onChange={(e) => setPuppyName(e.target.value)}
          required
        />
      </label>

      <label>
        <h3>Puppy Breed</h3>
        <input
          type="text"
          value={puppyBreed}
          onChange={(e) => setPuppyBreed(e.target.value)}
          required
        />
      </label>

      <label>
        <h3>Puppy Team</h3>
        <input
          type="text"
          value={puppyTeam}
          onChange={(e) => setPuppyTeam(e.target.value)}
        />
      </label>

      <label>
        <h3>Puppy Image URL</h3>
        <input
          type="text"
          value={puppyImage}
          onChange={(e) => setPuppyImage(e.target.value)}
        />
      </label>

      <button type="submit">Add Puppy</button>
    </form>
  );
}

export default PuppyForm;
