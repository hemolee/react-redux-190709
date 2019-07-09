let nextTodoId = 0
export const addTodo = (text)=>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = (index)=>{
    return{
        type:'TOGGLE_TODO',
        index:index
    }
}


