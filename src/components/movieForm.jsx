import React from "react";
import { useParams, useHistory } from "react-router-dom";

const MovieForm = (props) => {
  let { id } = useParams();
  let {replace} = useHistory();
  return (
    <>
      <h1>Movie Form Id {id}</h1>

      <button onClick={() => replace('/movies')}>Save</button>
    </>
  );
};

export default MovieForm;
