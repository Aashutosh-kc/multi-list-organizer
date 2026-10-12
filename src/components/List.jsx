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
		<div className="list-page" style={{ '--card-accent': color }}>
    <header className="list-page-header">
      <div>
        <p className="workspace-label">MY WORKSPACE / {list.title}</p>
        <h2 className="page-title">{list.title}</h2>
        <p className="page-description">
          Keep all list items and organize in one place.
        </p>
      </div>

      <button
        className="del-btn"
        onClick={() => removeList(list.id)}
        aria-label={`Delete ${list.title}`}
      >
        <Trash2 size={18} />
      </button>
    </header>

    <section className="add-activity">
      <div className="user-input">
        <input
          type="text"
          value={input}
          placeholder="Add an item..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleAdd}
          className="add-btn"
          disabled={input.trim() === ""}
        >
          Add
        </button>
      </div>

      {list.items.length === 0 && (
        <p className="no-items">No items yet. Add one to get started.</p>
      )}

      <ul>
        {list.items.map((item) => (
          <li key={item.id}>
            <p>{item.value}</p>
            <button
              onClick={() => removeListItem(list.id, item.id)}
              aria-label={`Remove ${item.value}`}
            >
              <X size={16} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  </div>
	)
}