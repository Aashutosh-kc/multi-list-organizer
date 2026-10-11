import { useState } from 'react';
import './AddList.css'

function AddList({ setList, setCurrentListId }){
	const [title, setTitle] = useState('');

	function handleSubmit(){
		const trimmed = title.trim();
		if (trimmed === "") return;
		const newList = {
			id: Date.now(),
			title: trimmed,
			items: []
		}
		setList((prev) => [...prev, newList]);
		setCurrentListId(newList.id);
		setTitle('');
	}

	function handleKeyDown(e){
		if (e.key === "Enter"){
			handleSubmit();
		}
	}

	return (
		<div className="add-list">
			<input type="text" placeholder="e.g. Grocery items"
				value={title} onKeyDown={handleKeyDown}
				onChange={(e) => setTitle(e.target.value)} />
			<button onClick={handleSubmit} disabled={title.trim() === ""}>Add</button>
		</div>
	)
}
export default AddList;