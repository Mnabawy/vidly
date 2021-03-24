import React, { Component } from "react";

const Like = (props) => {
  let classes = "fa-2x fa fa-heart";
  if (!props.liked) classes += "-o";

  return <i className={classes} aria-hidden="true" onClick={props.onClick} />;
};

export default Like;
