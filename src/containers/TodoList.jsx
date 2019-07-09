import {connect} from 'react-redux' //redux와 연결
import React, {Component} from 'react'
import Todo from '../components/Todo.jsx'
import {toggleTodo} from '../actions/index'

class TodoList extends Component{    
  render(){
    const todoTag = this.props.list.map(
        (todo, index) => <Todo key={index} {...todo} 
        onClick={
          () => this.checkTodo(index)
        } />
        )
      return(
        <ul>
          {todoTag}
        </ul>        
      )
    }
    checkTodo = (index) =>{
      this.props.dispatch(toggleTodo(index))
    }
  } 
/*     }
  mapStateToProps = (state) => ({
      todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
    })
  mapDispatchToProps = ({
      onTodoClick: toggleTodo
    })
    VisibleTodoList = connect(
        mapStateToProps,
        mapDispatchToProps
        )(TodoList)
} 
*/
  const mapStateToProps = (state) =>{
    return state.todo
  }
   
export default connect(mapStateToProps)(TodoList)