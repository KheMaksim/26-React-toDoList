import { useState, ChangeEvent } from "react";
import AddTaskFormProps from "../interfaces/AddTaskFormProps";

const AddTaskForm = (props: AddTaskFormProps) => {
	const [text, setText] = useState('');
	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};
	const addTask = () => {
		if (text.trim() !== '') {
			props.onAddTask(text);
			setText('');
		}
	};
	return (
		<div className="form">
			<input className="form__input" type="text" value={text} onChange={changeInput} />
			<button className="form__btn btn" onClick={addTask}>Добавить</button>
		</div>
	);
};

export default AddTaskForm;