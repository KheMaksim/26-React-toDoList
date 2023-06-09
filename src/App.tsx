import { useState } from 'react';
import ITask from './interfaces/ITask';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css'

const App = () => {
	const [tasks, setTasks] = useState<ITask[]>([
		{ id: Date.now(), text: 'Купить молоко' },
		{ id: Date.now() + 1, text: 'Выгулять собаку' },
		{ id: Date.now() + 2, text: 'Сделать домашнее задание' },
	]);
	const addTask = (text: string) => {
		const newTask: ITask = { id: Date.now(), text: text };
		setTasks([...tasks, newTask]);
	};
	const deleteTask = (taskId: number) => {
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(updatedTasks);
	};
	return (
		<div>
			<h2>Список дел:</h2>
			<AddTaskForm onAddTask={addTask} />
			{tasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					text={task.text}
					deleteTask={() => { deleteTask(task.id); }}
				/>
			))}
		</div>
	);
};

export default App;