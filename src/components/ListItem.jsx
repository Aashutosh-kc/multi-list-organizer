import { useState } from 'react';
import './ListItem.css';
function ListItem({list,addItem}){
	const [input,setInput] = useState('');

	function handleAdd(){
		if (input === '') return;
		addItem(list.id ,{ id: Date.now(), value: input} );
		setInput('');
	}
	return(
	<div className="add-activity">
		<h2>{list.title}</h2>
		<div className="user-input">
		<input type="text" value={input} placeholder="e.g. Vegetables"
		onChange={(e) => setInput(e.target.value)} />
		<button onClick={handleAdd}>Add</button>
		</div>
		<ul>
		{list.items.map((item) => (<li key={item.id}>{item.value}</li>))}	
		</ul>
	</div>)
}
export default ListItem;