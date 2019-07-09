import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component  {
 constructor(){
     super()    
      this.state = { input : '' }  //아래 메소드에서  const input = this.input 선언해줘서 필요없어짐
    //  this.createTodo = this.createTodo.bind(this)  아래 메소드들을 arrowfunction으로 바꿔서 bind안해도됨
    //  this.inputNode = this.inputNode.bind(this)
 }
 render(){ //render는 arrowfunction으로 바꾸면 안됨...
     return( 
      <div>
        <form onSubmit={this.createTodo}>
          <input ref={this.inputNode} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
      );
    }
    createTodo=(e)=>{
        const input = this.input
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        this.props.dispatch(addTodo(input.value))
        input.value = ''
    }
    inputNode=(node)=>{
        this.input = node
    }

}
AddTodo = connect()(AddTodo)

export default AddTodo