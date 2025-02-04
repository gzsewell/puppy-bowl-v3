import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PuppyForm from "../components/PuppyForm/PuppyForm";

function AddPuppy() {
  return (
    <div>
      <PuppyForm />
    </div>
  );
}

export default AddPuppy;
