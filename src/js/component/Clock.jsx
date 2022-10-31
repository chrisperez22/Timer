

import React from "react";

const Clock = (props) => {
  return (
    <div className="clock-indices">
      <h1>{props.value}</h1>
    </div>
  );
};

export default Clock;