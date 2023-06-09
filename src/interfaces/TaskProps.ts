export default interface TaskProps {
	id: number;
	text: string;
	deleteTask: () => void;
}