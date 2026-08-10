import { useState } from 'react';
import './List.css';
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
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  				<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"
  				stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg></button>
		</div>
		<div className="user-input">
			<input type="text" value={input} placeholder="e.g. Vegetables"
			onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
			<button onClick={handleAdd} className='add-btn' >Add</button>
		</div>
		<ul>
		{list.items.map((item) => (<li key={item.id}>
			<p>{item.value}</p>
			<button onClick={()=>removeListItem(list.id,item.id)}>X</button>
			</li>))}	
		</ul>
	</div>)
}