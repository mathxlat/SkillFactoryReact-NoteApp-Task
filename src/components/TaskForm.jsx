import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TaskForm = ({ addTask }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = event => {
		event.preventDefault()

		if (title.trim() && description.trim()) {
			const newTask = {
				id: uuid(),
				title: title.trim(),
				description: description.trim(),
				completed: false,
			}

			addTask(newTask)

			event.target.reset()
		}
	}

	return (
		<div className="bg-white rounded-lg p-4">
			<form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
				<input
					type="text"
					placeholder="Write your task title..."
					onChange={event => setTitle(event.target.value)}
					required={true}
					className="flex-1 px-4 text-black/70 block rounded-md border border-black/10 placeholder:italic placeholder:text-black/30 focus:border-sky-300/30 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
				/>
				<div className="flex gap-2 flex-1">
					<input
						type="text"
						placeholder="Write your task description..."
						onChange={event => setDescription(event.target.value)}
						required={true}
						className="flex-1 px-4 text-black/70 block rounded-md border border-black/10 placeholder:italic placeholder:text-black/30 focus:border-sky-300/30 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
					/>
					<input
						type="submit"
						value="Add"
						className="px-4 py-2 bg-green-100 text-black/80 font-mono font-bold hover:text-green-500 hover:bg-green-200 cursor-pointer transition-colors rounded-md focus:outline-none focus:ring focus:ring-green-50"
					/>
				</div>
			</form>
		</div>
	)
}

export default TaskForm
