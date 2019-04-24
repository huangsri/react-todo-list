import React from "react";

export default props => {
  return (
    <div className="item">
      <input
        type="checkbox"
        onChange={props.handleToggle}
        checked={props.data.isComplete}
      />
      <input
        className="item list"
        type="text"
        value={props.data.title}
        onChange={e => props.handleChange(e.target.value)}
      />
      <button onClick={props.handleDelete}>X</button>
    </div>
  );
};
