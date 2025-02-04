import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Puppies from "./Pages/Puppies";
import AddPuppy from "./Pages/AddPuppy";
import SinglePuppy from "./Pages/SinglePuppy";
import "./App.css";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/puppy_list" element={<Puppies />} />
        <Route path="/add_puppy" element={<AddPuppy />} />
        <Route path="/puppies/details/:id" element={<SinglePuppy />} />
      </Routes>
    </>
  );
}

export default App;
