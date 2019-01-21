import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			task:[],
			currentTask: "",
			completed:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTask = this.handleTask.bind(this);
		this.done=this.done.bind(this);
	}
	handleChange(e) {
		this.setState({
			currentTask: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		const arr = [...this.state.todos];
		arr.push(this.state.currentTask);
		this.setState({
			todos: arr,
			currentTask: ""
		});
		console.log(this.state.todos);
		e.target.reset();
	}
		handleTask(e){
		const arr = [...this.state.task];
		if(e.target.checked===true){
			arr.push(e.target.value)
			console.log(arr)
			this.setState({task:arr})
		} else {
			arr.splice(e.target.value,1)
			console.log(arr)
			this.setState({task:arr})
		}
	}
	done(){
		console.log("done")
	}
	render() {
		const todos = [...this.state.todos];
		let arr = [];
		return (
			<div>
				<h2 style={{ textAlign: "center" }}>Hello World</h2>
				<Box>
					<div className="inputBox">
						<form name="taskForm" onSubmit={this.handleSubmit}>
							<label for="task" className="label">
								<h2>What do you need to do?</h2>
							</label>
							<input name="task" id="task" onChange={this.handleChange} />
							<input type="submit" value="Submit" hidden />
						</form>
						<code>Press Enter ⌨</code>
						<p>Want to add this task 👉 {this.state.currentTask}</p>

						{todos.map(todo => {
							const index = todos.indexOf(todo);
							return (
								<div key={index} className='todos'>
										<input type="checkbox" value={todo} onClick={this.handleTask}/>
										{todo}
									<div className="done" onClick={()=>{todos.splice(index, 1);this.setState({todos:todos})}}>✔</div>
										<div className="del" onClick={()=>{todos.splice(index, 1);this.setState({todos:todos})}}>✖</div>
								</div>
							);
						})}
						</div>
				</Box>
			</div>
		);
	}
}

const Box = ({ children }) => <div className="container">{children}</div>;

export default App;
