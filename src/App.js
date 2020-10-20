import React, { Component } from 'react'





export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
      id: 0,
      isDone: null
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
    listArray.push(input);
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

 isClicked(){
   let icon = this.state.isDone
   if(icon == null){
      icon = <i class="fas fa-check"></i>
      this.setState({
        isDone: icon
      })
   }
   else{
     this.setState({
       isDone: null
     })
   }
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
        <ul className="list-group">
          {this.state.list.map((val, i) =>
            <div
              key={val}
              id={this.state.list.indexOf(val)}
              className="list-group-item d-flex justify-content-between text-primary">
             <div className="col-1 border text-center"
              onClick={(e) => this.isClicked(e.target.value)} >
             {this.state.isDone}
             </div>
              {/* <input onChange={(e) => this.checkbox(e.target)} 
              type="checkbox" 
              className="form-check-input mt-2"></input> */}
              <h4>{val}</h4>
              <button
                onClick={() => this.removeFromList(i)}
                className="btn btn-danger text-white">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>)}
        </ul>
      </div>
    )
  }
}

