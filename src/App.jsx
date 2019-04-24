import React, { Component } from "react";
import "./App.css";

import Lists from "./components/Lists";
import NewItem from "./components/NewItem";

class App extends Component {
  state = {
    lists: [
      { title: "Task 1", isComplete: false, id: 0 },
      { title: "Task 2", isComplete: false, id: 1 },
      { title: "Task 3", isComplete: false, id: 2 },
      { title: "Task 4", isComplete: false, id: 3 }
    ],
    showCompleted: false,
    lastId: 3
  };

  handleToggle = (id, idx) => {
    const { lists } = this.state;
    const [editedItem] = lists.filter(list => list.id === id);
    editedItem.isComplete = !editedItem.idComplete;
    const newList = [
      ...this.state.lists.slice(0, idx),
      editedItem,
      ...this.state.lists.slice(idx + 1)
    ];
    this.setState({ lists: newList });
  };

  handleDelete = index => {
    const newLists = [
      ...this.state.lists.slice(0, index),
      ...this.state.lists.slice(index + 1)
    ];
    this.setState({ lists: newLists });
  };

  handleSubmit = value => {
    const newLists = this.state.lists;
    const newId = this.state.lastId + 1;
    newLists.push({ title: value, isComplete: false, id: newId });
    this.setState({ lists: newLists, lastId: newId });
  };

  handleShowComplete = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  };

  handleChange = (idx, value) => {
    const editedItem = this.state.lists[idx];
    editedItem.title = value;
    const newList = [
      ...this.state.lists.slice(0, idx),
      editedItem,
      ...this.state.lists.slice(idx + 1)
    ];
    this.setState({ lists: newList });
  };

  render() {
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <button className="btn" onClick={this.handleShowComplete}>
          {this.state.showCompleted ? "Show All" : "Show Complete"}{" "}
        </button>
        <NewItem handleSubmit={this.handleSubmit} />
        <Lists
          data={this.state.lists}
          handleToggle={(id, idx) => this.handleToggle(id, idx)}
          handleDelete={id => this.handleDelete(id)}
          handleChange={(idx, value) => this.handleChange(idx, value)}
          showCompleted={this.state.showCompleted}
        />
      </div>
    );
  }
}

export default App;
