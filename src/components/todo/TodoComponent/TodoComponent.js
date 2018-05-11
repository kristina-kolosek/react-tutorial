import React, { Component } from 'react';
import CheckComponent from '../CheckComponent/CheckComponent'
import '../CheckComponent/CheckComponent.css'
import './TodoComponent.css'
import DeleteComponent from '../DeleteComponent/DeleteComponent'

class TodoComponent extends Component {
	constructor() {
		super();
		this.state = {
			todos: [
				  {
				    label: 'Inception',
				    checked: false,
				    className: 'check'
				  },
				  {
				    label: 'Looper',
				    checked: false,
				    className: 'check'
				  },
				  {
				    label: 'Cloud Atlas',
				    checked: false,
				    className: 'check'
				  },
				],
			counter: 0,
		};
	}

	handleClick = (index) => (event) => {
    this.setState((prevState) => {
			const todos = prevState.todos;
			let counter = prevState.counter;
			let className = prevState.className
			if(!todos[index].checked) {
				counter = prevState.counter + 1;
				todos[index].className = "disabled"
			}
			todos[index].checked = true;
			return {
			 	 todos: todos,
			 	 counter: counter,
			 	 className: className
			}
    })
	}

	handleClickDelete = () => {
		this.setState((prevState) => {
			let todos = prevState.todos.filter((item) => {
				return !item.checked;
			});
			
			// BAD WAY!!
			// for(let i = 0; i < todos.length; i++) {
			// 	if(todos[i].checked) {
			// 		todos.splice(i, 1);
			// 		i--;
			// 		counter = 0;
			// 	}
			// }
			
			return {
			 	 todos: todos,
			 	 counter: 0,
			}
    })
	}

	handleClickAdd = () => {
    var todo = prompt("Please enter a todo:", "Be happy");
		this.setState((prevState) => {
			const todos = prevState.todos;
			let counter = prevState.counter;
			let className = prevState.className
			let todonew = {
				label: todo,
				checked: false,
				class: 'check'
			}
			todos.push(todonew);
			return {
			 	 todos: todos,
			 	 counter: counter,
			 	 className: className
			}
    })
	}


	renderTodos = () => {
		return this.state.todos.map((item, index) => (
				<div key={`todo_${index}`}>
					{ item.label }
					<CheckComponent checked={item.checked} handleClick = {this.handleClick(index)} className={item.className} />
				</div>
			))
	}

	renderAll = () => {
		return (
				<div className="todo-component">
					<div class="counter">{this.state.todos.length - this.state.counter} </div>
					<DeleteComponent handleClick={this.handleClickDelete} name="Delete" className="delete-button"/>
					<DeleteComponent handleClick={this.handleClickAdd} name="Add" />
					{this.renderTodos()}
				</div>
			)
	}

	render() {
		return ( 
				this.renderAll()
			)
	}
}

export default TodoComponent;

