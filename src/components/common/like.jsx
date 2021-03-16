import React, { Component } from 'react';

const  Like = (props) => {
   
   let classes = "fa-2x m-2 fa fa-heart"
   if (!props.liked) classes += "-o"

   return (
      <i
         className={classes}
         aria-hidden="true"
         onClick={props.onClick}
      />
   );
}



export default Like;