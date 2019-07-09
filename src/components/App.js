import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import TodoList from '../containers/TodoList.jsx'
import ControllerButton from '../components/ControllerButton.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'
const App = ()=>( // return 생략  
    <div className="App">
    <AddTodo/>     
    <TodoList />    
    <ControllerButton />
    <VisibleTodoList />
    <Footer />
    </div> 
);

export default App;
