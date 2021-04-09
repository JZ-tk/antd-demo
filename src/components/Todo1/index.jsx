import React from 'react';
import Header from './Header'
import List from './List'
import Footer from './Footer'
class Todo1 extends React.Component {
    //init state
    state = {
        todos: [
            { id: "001", name: "eating", done: true },
            { id: "002", name: "sleeping", done: true },
            { id: "003", name: "coding", done: false },
            { id: "004", name: "shopping", done: true }
        ]
    }
    addTodo = (todoObj) => {
        console.log("App", todoObj)
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id)
                return { ...todoObj, done }
            else
                return todoObj
        })
        this.setState({ todos: newTodos })
    }
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }
    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        console.log(newTodos)
        this.setState({ todos: newTodos })
    }
    clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
                </div>
            </div>
        )
    }
}

export default Todo1