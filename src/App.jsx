
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import ListPage from './components/ListPage.jsx'

export default function App() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list')
    return saved ? JSON.parse(saved) : []
  })

  const COLORS = ['#6366f1', '#ec4889', '#10b981', '#f59e0b', '#3b82f6']

  function addItem(listId, newItem) {
    setList((prev) =>
      prev.map((l) =>
        l.id === listId
          ? { ...l, items: [...l.items, newItem] }
          : l
      )
    )
  }

  function removeList(id) {
    setList((prev) => prev.filter((n) => n.id !== id))
  }

  function removeListItem(listId, itemId) {
    setList((prev) =>
      prev.map((l) =>
        l.id === listId
          ? { ...l, items: l.items.filter((item) => item.id !== itemId) }
          : l
      )
    )
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            list={list}
            setList={setList}
            colors={COLORS}
          />
        }
      >
        <Route
          index
          element={
            <div className="empty-state">
              <h2>{list.length === 0 ? 'No lists yet' : 'Select a list'}</h2>
              <p>
                {list.length === 0
                  ? 'Create your first list from the sidebar.'
                  : 'Choose a list from the sidebar to see its items.'}
              </p>
            </div>
          }
        />

        <Route
          path="lists/:id"
          element={
            <ListPage
              list={list}
              addItem={addItem}
              removeList={removeList}
              removeListItem={removeListItem}
              colors={COLORS}
            />
          }
        />
      </Route>
    </Routes>
  )
}
