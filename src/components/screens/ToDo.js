import React,{ useState} from 'react'
import {ReactComponent as Delete} from "../../assets/delete.svg"
import {ReactComponent as Plus} from "../../assets/plus.svg"
import {ReactComponent as Tick} from "../../assets/tick-green.svg"
import {ReactComponent as Revert} from "../../assets/revert.svg"
import "../../App.css"
class ToDo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      input: "",
      completedItems: [],
    };
  }

  removeItem = (id) => {
    console.log(id)
    let new_item = this.state.items.filter((item) => item.id !== id)
    this.setState({items: new_item})
  }
  removeItem2 = (id) => {
    console.log(id)
    let new_item = this.state.completedItems.filter((item) => item.id !== id)
    this.setState({completedItems: new_item})
  }

  updateItem = (item) => {
    let new_item = {
      id:this.state.items.length,
      title:this.state.input
    }
    this.setState({
      items:[...this.state.items,new_item], 
      input:""})
  }
  updateItem2 = (item) => {
    let new_item = {
      id:this.state.items.length,
      title:item.title
    }
    this.setState({
      items:[...this.state.items,new_item], 
      input:""})
  }

  RenderItems = () => {
    return this.state.items.map((item) => {
      return(
        <>
          <li key={item.id} className='li' >
            <Plus id='plus' onClick={() => {
              this.RenderItems2(item)
              this.removeItem(item.id)
            }}/>
            {item.id} ,  {item.title}
            <Delete id='delete' onClick={() => this.removeItem(item.id)}/>
          </li>
        </>
      )
      
    })
  };

  RenderItems2 = (item) => {
    
    let new_item = {
      id:this.state.completedItems.length,
      title:item.title
    }
    this.setState({
      completedItems:[...this.state.completedItems,new_item],
    })
  };
  
  RenderCompletedItems = () => {
    return this.state.completedItems.map((item) => {
      return(
        <>
          <li key={item.id} className='li' >
            <Tick  id='tick'/>
            {item.id} , {item.title}
            <Revert id='revert' onClick={() => {
              this.updateItem2(item)
              this.removeItem2(item.id)
            }}/>
            <Delete id='delete' onClick={() => {
              this.removeItem2(item.id)}
              }/>
          </li>
        </>
      )
      
    })
  };
  render() {
    return(
      <>
          <h1>Todo List</h1>
          <ul id='List'>
            <h3>Things to be done</h3>
            {this.RenderItems()}
            <input
            placeholder="+ New Task"
            value={this.state.input}
            onChange ={(e) => this.setState({input:e.target.value})}
            />
            <button onClick={() => {
              this.updateItem()
            }}>Add New</button>
          </ul>
          <ul id='List2'>
            <h3>Completed</h3>
            {this.RenderCompletedItems()}
          </ul>
      </>
    )
  }
}

export default ToDo