import React, { useState } from "react";

export default function IsLoggedIn(props) {
  const [logged, setlogged] = useState(true);
  console.log("mare")
  return logged ? props.childrens : <h1>not logged</h1>;
}
