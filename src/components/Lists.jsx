import React from "react";

import ListItem from "./ListItem";

export default props => {
  const lists = props.data.map((data, idx) => (
    <ListItem
      data={data}
      key={data.id}
      isComplete={data.isComplete}
      handleChange={value => props.handleChange(idx, value)}
      handleToggle={() => props.handleToggle(data.id, idx)}
      handleDelete={() => props.handleDelete(data.id)}
    />
  ));

  const filteredList = props.data
    .filter(data => data.isComplete)
    .map((data, idx) => (
      <ListItem
        data={data}
        key={data.id}
        isComplete={data.isComplete}
        handleChange={value => props.handleChange(idx, value)}
        handleToggle={() => props.handleToggle(data.id, idx)}
        handleDelete={() => props.handleDelete(data.id)}
      />
    ));

  return (
    <div>
      <ul className="items">{props.showCompleted ? filteredList : lists}</ul>
    </div>
  );
};
