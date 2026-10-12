
import { Link, useParams } from 'react-router-dom'
import List from './List.jsx'

export default function ListPage({
  list,
  addItem,
  removeList,
  removeListItem,
  colors
}) {
  const { id } = useParams()

  const currentList = list.find(
    (item) => String(item.id) === id
  )

  if (!currentList) {
    return (
      <div className="empty-state">
        <h2>List not found</h2>
        <p>This list doesn't exist or may have been deleted.</p>
        <Link to="/">Go back</Link>
      </div>
    )
  }

  return (
    <List
      key={currentList.id}
      list={currentList}
      addItem={addItem}
      color={colors[currentList.id % colors.length]}
      removeList={removeList}
      removeListItem={removeListItem}
    />
  )
}
