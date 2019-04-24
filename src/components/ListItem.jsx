import React from "react";

export default props => {
  const className = props.data.isComplete ? "complete" : "";

  return (
    <div className="item">
      <input
        type="checkbox"
        onChange={() => props.handleToggle(props.index)}
        checked={props.data.isComplete}
      />
      <li className={className}>{props.data.title}</li>
      <button onClick={props.handleDelete}>X</button>
    </div>
  );
};
