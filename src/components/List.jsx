import { useState } from 'react';
import './List.css';
import { Trash2, X } from "lucide-react"

export default function List({ list, addItem, color, removeList, removeListItem }){
	const [input, setInput] = useState('');

	function handleAdd(){
		const trimmed = input.trim();
		if (trimmed === '') return;
		addItem(list.id, {
			id: Date.now(),
			value: trimmed
		});
		setInput('');
	}

	function handleKeyDown(e){
		if (e.key === "Enter"){
			handleAdd();
		}
	}

	return (
		<div className="add-activity" style={{ '--card-accent': color }}>
			<div className="title">
				<h2>{list.title}</h2>
				<button className="del-btn" onClick={() => removeList(list.id)}>
					<Trash2 size={16} />
				</button>
			</div>

			<div className="user-input">
				<input type="text" value={input} placeholder="e.g. Vegetables"
					onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
				<button onClick={handleAdd} className="add-btn" disabled={input.trim() === ""}>Add</button>
			</div>

			{list.items.length === 0 && <p className="no-items">No items yet.</p>}

			<ul>
				{list.items.map((item) => (
					<li key={item.id}>
						<p>{item.value}</p>
						<button onClick={() => removeListItem(list.id, item.id)}>
							<X size={16} />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}