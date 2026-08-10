import { useState } from 'react';
import AddList from './components/AddList.jsx'
import './App.css'
import AllLists from './components/AllLists.jsx'
export default function App(){

  const[list,setList] = useState([]);

  function addItem(listId,newItem){
    setList((prev) => prev.map((l) => l.id=== listId?{...l,
      items: [...l.items,newItem]}:l));
  }


  return(
    <div>
      <h2 className='title' >Multi-List Organizer</h2>
      <p className='description'>Add Multiple Lists and arrange them</p>
      <AddList setList={setList} list={list} />
      <fieldset>
        <legend>Lists</legend>
      <AllLists list={list} addItem={addItem} setList={setList}/>
      </fieldset>
    </div>
      )
}
