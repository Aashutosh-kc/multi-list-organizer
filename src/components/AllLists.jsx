
import { Link, useParams } from 'react-router-dom'
import './AllLists.css'

export default function AllLists({ list, colors }) {
  const { id } = useParams()

  return (
    <div className="all-list">
      {list.map((n) => (
        <Link
          key={n.id}
          to={`/lists/${n.id}`}
          className={`list-title ${
            id === String(n.id) ? 'active' : ''
          }`}
          style={{
            '--list-accent': colors[n.id % colors.length]
          }}
        >
          <span className="list-color-dot" />
          <span className="list-name">{n.title}</span>
        </Link>
      ))}
    </div>
  )
}
