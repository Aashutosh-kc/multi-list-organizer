import { useState, useEffect } from 'react';
import AddList from './components/AddList.jsx'
import './App.css'
import { ScrollText } from "lucide-react"
import AllLists from './components/AllLists.jsx'
import List from './components/List.jsx';

export default function App(){

  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentListId, setCurrentListId] = useState(null);
  const COLORS = ['#6366f1','#ec4889','#10b981','#f59e0b','#3b82f6'];

  function addItem(listId, newItem){
    setList((prev) => prev.map((l) => l.id === listId ? {...l, items: [...l.items, newItem]} : l));
  }
  function removeList(id){
    setList((prev) => prev.filter((n) => n.id !== id));
    if (id === currentListId){
      setCurrentListId(null);
    }
  }
  function removeListItem(listId, itemId){
    setList((prev) => prev.map((l) => l.id === listId ? {...l, items: l.items.filter((item) => item.id !== itemId)} : l));
  }

  const currentList = list.find((l) => l.id === currentListId);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return (
    <div className='app'>
      <div className='side-bar'>
        <div>
          <h1 className='app-title'><ScrollText size={22}/><span>Multi-List Organizer</span></h1>
          <p className='description'>Add multiple lists and arrange them</p>
        </div>

        <AddList setList={setList} setCurrentListId={setCurrentListId} />

        <div className='list-bar'>
          <h3>Lists</h3>
          {list.length === 0 && <p className='muted'>No lists yet.</p>}
          <AllLists list={list} currentListId={currentListId} setCurrentListId={setCurrentListId} />
        </div>
      </div>

      <div className='main-page'>
        {currentList ? (
          <List key={currentList.id} list={currentList} addItem={addItem}
            color={COLORS[currentList.id % COLORS.length]}
            removeList={removeList} removeListItem={removeListItem} />
        ) : (
          <div className='empty-state'>
            <h2>{list.length === 0 ? 'No lists yet' : 'Select a list'}</h2>
            <p>{list.length === 0
              ? 'Create your first list from the sidebar.'
              : 'Choose a list from the sidebar to see its items.'}</p>
          </div>
        )}
      </div>
    </div>
  )
}