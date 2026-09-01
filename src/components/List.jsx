import { useState } from 'react';
import './List.css';
import {Trash2,X } from "lucide-react"
export default function List({list,addItem,color,removeList,removeListItem}){

	const [input,setInput] = useState('');

	function handleAdd(){
		if (input === '') return;
		addItem(list.id ,{ 
			id: Date.now(), 
			value: input} 
		);
		setInput('');
	}

	function handleKeyDown(e){
		if (e.key == "Enter"){
			handleAdd();
		}
	}
	

	return(
	<div className="add-activity" style={{ '--card-accent': color}}>
		<div className="title">
			<h2>{list.title}</h2>
			<button className = "del-btn"onClick={() => removeList(list.id)}>
				<Trash2 size={20}/>
			</button>
		</div>
		<div className="user-input">
			<input type="text" value={input} placeholder="e.g. Vegetables"
			onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
			<button onClick={handleAdd} className='add-btn' >Add</button>
		</div>
		<ul>
		{list.items.map((item) => (<li key={item.id}>
			<p>{item.value}</p>
			<button onClick={()=>removeListItem(list.id,item.id)}><X size={16}/></button>
			</li>))}	
		</ul>
	</div>)
}