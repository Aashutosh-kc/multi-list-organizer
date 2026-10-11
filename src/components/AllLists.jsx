import './AllLists.css'

export default function AllLists({ list, currentListId, setCurrentListId }){
	return (
		<div className="all-list">
			{list.map((n) => (
				<button
					key={n.id}
					className={`list-title ${currentListId === n.id ? "active" : ""}`}
					onClick={() => setCurrentListId(n.id)}
				>
					{n.title}
				</button>
			))}
		</div>
	)
}