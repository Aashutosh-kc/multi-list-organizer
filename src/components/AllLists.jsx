
import './AllLists.css'

export default function AllLists({list,currentListId, setCurrentListId,colors}) {
  return (
    <div className="all-list">
      {list.map((n) => (
        <button
          key={n.id}
          className={`list-title ${currentListId === n.id ? 'active' : ''}`}
          onClick={() => setCurrentListId(n.id)}
          style={{
            '--list-accent': colors[n.id % colors.length]
          }}
        >
          <span className="list-color-dot" />
          <span className="list-name">{n.title}</span>
        </button>
      ))}
    </div>
  )
}
