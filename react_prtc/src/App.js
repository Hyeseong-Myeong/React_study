import { useState, useEffect } from "react";


function App() {
	const [todo, setToDo]  = useState("");
	const [todos, setTodos] = useState([]);

	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(todo === ""){
			return;
		}
		setTodos(currentArray => [todo, ...currentArray]);
		setToDo("");
	}
	

	return (
		<div>
			<h1>My To Dos ({todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange} 
					value={todo} 
					type="text" 
					placeholder="Write your ToDo..." 
				/>
				<button>Add To Do</button>
			</form>
			<hr/>
			<ul>
				{todos.map((item, index) => <li key={index}>{item}</li>)}	
			</ul>
		</div>
	);
}

export default App;
