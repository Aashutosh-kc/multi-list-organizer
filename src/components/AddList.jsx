import { useState } from 'react';
import './AddList.css'
function AddList({setList}){

	const [title,setTitle] = useState('');

	function handleSubmit(){
		if (title === "" || title === " ") return;
		const newList={
			id: Date.now(),
			title: title,
			items: []
		}
		setList((prev) => [...prev, newList]);
		setTitle('')
	}

	return (
	<div className="add-list">
		
		<input type="text" placeholder="e.g. Grocery items" 
		value={title} 
		onChange={(e) => setTitle(e.target.value)} />
		<button onClick={handleSubmit}>Add</button>
	</div>
	)
}
export default AddList;