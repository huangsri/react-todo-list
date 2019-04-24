import React from "react";

import ListItem from "./ListItem";

export default props => {
  const lists = props.data.map(data => (
    <ListItem
      data={data}
      key={data.id}
      index={data.id}
      isComplete={data.isComplete}
      handleToggle={() => props.handleToggle(data.id)}
      handleDelete={() => props.handleDelete(data.id)}
    />
  ));

  const filteredList = props.data
    .filter(data => data.isComplete)
    .map(data => (
      <ListItem
        data={data}
        key={data.id}
        index={data.id}
        isComplete={data.isComplete}
        handleToggle={() => props.handleToggle(data.id)}
        handleDelete={() => props.handleDelete(data.id)}
      />
    ));

  return (
    <div>
      <ul className="items">{props.showCompleted ? filteredList : lists}</ul>
    </div>
  );
};
