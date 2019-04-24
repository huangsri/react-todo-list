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

  handleToggle = index => {
    const { lists } = this.state;
    lists[index].isComplete = !this.state.lists[index].isComplete;
    this.setState({ lists });
    console.table(this.state.lists);
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
    console.table(this.state.lists);
    this.setState({ showCompleted: !this.state.showCompleted });
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
          handleToggle={index => this.handleToggle(index)}
          handleDelete={index => this.handleDelete(index)}
          showCompleted={this.state.showCompleted}
        />
      </div>
    );
  }
}

export default App;
