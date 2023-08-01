import { useState } from 'react';
import Form from './Component/Form';
import Header from './Component/Header';
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';
import FragmentComponent from './New App/FragmentComponent';
import Table from './New App/Table';
import Parent from './New App/Parent';
import Modal from './New App/Modal';
import ComA from './UseContext/ComA';
import UseReff from './UseRef/UseReff';
import LoginForm from './Component/LogIn Form/LoginForm';
import Header1 from './Component/TodoApp/Header1';
import Form1 from './Component/TodoApp/Form1';

function App() {
	const [ todo, setTodo ] = useState('');
	const [ todoList, setTodoList ] = useState([]);

	// const [ user, setUser ] = useState({
	// 	form1: '',
	// 	form2: ''
	// });
	// const [ userArray1, setUserArray1 ] = useState([]);
	// const [ userArray2, setUserArray2 ] = useState([]);

	return (
		<div className="App">
			{/* <Header1 />
			<Form1 /> */}

			{/* <LoginForm
				user={user}
				setUser={setUser}
				userArray1={userArray1}
				setUserArray1={setUserArray1}
				userArray2={userArray2}
				setUserArray2={setUserArray2}
			/> */}
			{/* <UseReff /> */}

			{/* <ComA />

			<Modal />

			<h1>React App</h1>
			<Table /> */}

			<Header />
			<Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
}

export default App;
