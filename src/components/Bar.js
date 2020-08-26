import React from "react";


export default function Todo(props) {
  console.log(props);
  return (
     <li><a href="#">{props.name}</a></li>
  );
}