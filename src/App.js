import React, { Component } from 'react'





export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
      id: 0,
      Fov: item => item
    }
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    }, () => console.log(input)
    )
  }
  addToList(input) {
    let listArray = this.state.list;
    listArray.push({ name: input, isDone: null });
    this.setState({
      list: listArray,
      userInput: '',
    })
  }
  removeFromList(id) {
    let idArray = this.state.list;
    idArray.splice(id, 1);
    this.setState({
      list: idArray
    })
  }

  isClicked(name) {
    let list = this.state.list;
    let something = list.find(item => item.name == name)
    something.isDone = !something.isDone;
    this.setState({
      list
    })
  }
  showDone() {
    let Fov = this.state.Fov
    Fov = item => item.isDone
    this.setState({
      Fov
    })
  }
  showAll() {
    let Fov = this.state.Fov
    Fov = item => item
    this.setState({
      Fov
    })
  }
  showActive() {
    let Fov = this.state.Fov
    Fov = item => !item.isDone
    this.setState({
      Fov
    })
  }
  completeAll() {
    let list = this.state.list
    for (var i in list) {
      if (list[i].isDone == null || list[i].isDone == false) {
        list[i].isDone = true
      }
    }
    this.setState({
      list
    })
  }

  uncheckAll() {
    let list = this.state.list
    for (var i in list) {
      if (list[i].isDone == true) {
        list[i].isDone = false
      }
    }
    this.setState({
      list
    })
  }

  removeCompleted() {
    let list = this.state.list
    var i = 0;
    while (i < list.length) {
      if (list[i].isDone == true) {
        list.splice(i, 1);
      } else {
        ++i;
      }
    }
    this.setState({
      list
    })
  }




  render() {
    return (
      <div className="text-center bg-success text-white">
        <h1>To-Do List</h1>
        <input
          onChange={(e) => this.changeUserInput(e.target.value)}
          type="text"
          value={this.state.userInput}
          placeholder="Add Task"
        />
        <button className="btn btn-primary" onClick={() => this.addToList(this.state.userInput)}><b>Add</b></button>
        <div className="container-fluid bg-success">
          <div className="row d-flex justify-content-between">
            <button onClick={() => this.completeAll()} className="btn btn-warning text-white col-4" type="button"><b>Complete All</b></button>
            <button onClick={() => this.removeCompleted()} className="btn btn-warning text-white col-4" type="button"><b>Remove All Completed</b></button>
            <button onClick={() => this.uncheckAll()} className="btn btn-warning text-white col-4" type="button"><b>Uncheck All</b></button>
          </div>
        </div>
        <ul className="list-group">
          {this.state.list.filter(this.state.Fov).map((item, i) =>
            <div
              key={i}
              id={i}
              className="list-group-item d-flex justify-content-between text-primary">
              <div className="col-1 border text-center"
                onClick={() => this.isClicked(item.name)} >
                {item.isDone && <i className="fas fa-check text-success"></i>}
              </div>
              <h4>{item.name}</h4>
              <button
                onClick={() => this.removeFromList(i)}
                className="btn btn-warning text-white">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>)}
        </ul>
        <div className="container-fluid bg-success">
          <div className="row d-flex justify-content-between">
            <button onClick={() => this.showAll()} className="btn btn-primary text-white col-4" type="button"><b>Show All</b></button>
            <button onClick={() => this.showActive()} className="btn btn-primary text-white col-4" type="button"><b>Show Active</b></button>
            <button onClick={() => this.showDone()} className="btn btn-primary text-white col-4" type="button"><b>Show Done</b></button>
          </div>
        </div>
        <p className="text-primary">There are {this.state.list.filter(item => !item.isDone).length} uncomplete tasks</p>
      </div>
    )
  }
}

