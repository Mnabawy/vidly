import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <>
      <h1>Movie Form Id {match.params.id}</h1>
      <button
        onClick={() => history.replace("/movies")}
        className="btn btn-primary"
      >
        Save
      </button>
    </>
  );
};

export default MovieForm;
