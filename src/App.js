import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "meeting",
			day: "Feb 6th at 2:30pm",
			reminder: true,
		},
		{
			id: 3,
			text: "park",
			day: "Feb 7th at 2:30pm",
			reminder: true,
		},
	]);

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} onDelete={deleteTask} />
		</div>
	);
}

export default App;
