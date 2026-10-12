
import { Outlet } from 'react-router-dom'
import { ScrollText } from 'lucide-react'
import AddList from './AddList.jsx'
import AllLists from './AllLists.jsx'

export default function Layout({ list, setList, colors }) {
  return (
    <div className="app">
      <aside className="side-bar">
        <div>
          <h1 className="app-title">
            <ScrollText size={22} />
            <span>Multi-List Organizer</span>
          </h1>
          <p className="description">
            Add multiple lists and arrange them
          </p>
        </div>

        <AddList
          setList={setList}
          setCurrentListId={() => {}}
        />

        <div className="list-bar">
          <h3>Lists</h3>
          {list.length === 0 && (
            <p className="muted">No lists yet.</p>
          )}
          <AllLists list={list} colors={colors} />
        </div>
      </aside>

      <main className="main-page">
        <Outlet />
      </main>
    </div>
  )
}
