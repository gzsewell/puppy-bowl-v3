import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SinglePuppy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [puppyCard, setPuppyCard] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
      )
      .then((data) => {
        console.log(data.data.data.player);
        setPuppyCard(data.data.data.player);
      })
      .catch((err) => console.error(err));
  }, []);
  //  --Delete Function--
  const deletePuppy = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${puppyCard?.name}?`
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
      );
      console.log("Puppy deleted successfully");

      navigate("/puppy_list");
    } catch (error) {
      console.error("Error deleting puppy:", error);
    }
  };

  return (
    <div className="puppy-list">
      <h3>Puppy Card for: {puppyCard?.name}</h3>
      <p>{puppyCard?.breed}</p>
      <p>{puppyCard?.status}</p>
      <img
        src={puppyCard?.imageUrl}
        alt={puppyCard?.name}
        style={{ width: "200px", height: "auto" }}
      ></img>
      <button
        onClick={deletePuppy}
        style={{ backgroundColor: "red", color: "white", padding: "10px" }}
      >
        Delete Puppy
      </button>
    </div>
  );
}

export default SinglePuppy;
