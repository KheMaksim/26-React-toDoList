import TaskProps from "../interfaces/TaskProps";

const Task = (props: TaskProps) => {
	return (
		<div className="task__container">
			<input type="checkbox" />
			<p>{props.text}</p>
			<button className="btn" onClick={props.deleteTask}>Удалить</button>
		</div>
	);
};

export default Task;