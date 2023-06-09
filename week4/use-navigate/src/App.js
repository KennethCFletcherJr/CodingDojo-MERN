import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const sendSurvey = (e) => {
    e.preventDefault();
    // When the user clicks the submit input in the form, 
    //we will navigate to the "/results" path
    navigate("/results");
  }

  const setName = (e) => {

    e.target.value();

  }

  return (
    <form onSubmit={sendSurvey}>
      <label>Your Name:</label>
      <input type="text" onChange= {setName} value={name} />
      <label>Your Comment:</label>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
  );
}
