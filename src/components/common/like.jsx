import React from "react";

const Like = ({ onClick, liked }) => {
  let classes = "fa-2x fa fa-heart";
  if (!liked) classes += "-o";

  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Like;
