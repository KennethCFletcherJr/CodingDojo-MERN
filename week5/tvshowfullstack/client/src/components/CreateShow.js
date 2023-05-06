import React, { useState } from "react";
import axios from "axios";
//Week 4 react-router-dom, { useNavigate }
import { useNavigate } from "react-router-dom";

const CreateShow = (props) => {
  const navigate = useNavigate();

  //Need to bring in a form for CreateShow...see...

  //   let bool = true

  const [show, setShow] = useState({
    title: "",
    releaseYear: 1920,
    network: "",
    creator: "",
    genre: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setShow({ ...show, [e.target.name]: e.target.value });
    // setShow(prevState => ({...prevState, [e.target.name]:e.target.value }))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/newShow", show)
      //For a successful post, navigate the User to a success page.

      .then((res) => {
        console.log(res);
        //Navigate to Home, routes for React router (navigate/links front end)
        navigate("/");
        setShow({
          title: "",
          releaseYear: 1920,
          network: "",
          creator: "",
          genre: "",
        });
      })

      .catch((err) => {
        //Log all errors
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  // Handle errors from the backend: {errors.title ? (
  //             <p className="text-danger">{errors.title.message}</p>
  //           ) : null}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={show.title}
          />

          {errors.title ? (
            <p className="text-danger">{errors.title.message}</p>
          ) : null}

          <label>Release Year: </label>
          <input
            type="text"
            name="releaseYear"
            onChange={changeHandler}
            value={show.releaseYear}
          />
          {errors.releaseYear ? (
            <p className="text-danger">{errors.releaseYear.message}</p>
          ) : null}

          <label>Network: </label>
          <input
            type="text"
            name="network"
            onChange={changeHandler}
            value={show.network}
          />
          {errors.network ? (
            <p className="text-danger">{errors.network.message}</p>
          ) : null}

          <label>Creator: </label>
          <input
            type="text"
            name="creator"
            onChange={changeHandler}
            value={show.creator}
          />
          {errors.creator ? (
            <p className="text-danger">{errors.creator.message}</p>
          ) : null}

          <label>Genre: </label>
          <input
            type="text"
            name="genre"
            onChange={changeHandler}
            value={show.genre}
          />
          {errors.genre ? (
            <p className="text-danger">{errors.genre.message}</p>
          ) : null}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateShow;
