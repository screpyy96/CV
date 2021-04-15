import React from "react";

const ProgressBar = (props) => {
  const { color, completed, skillName } = props;
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
