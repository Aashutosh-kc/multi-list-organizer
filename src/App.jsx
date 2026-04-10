import { useState } from 'react';
import AddList from './components/AddList.jsx'

import AllLists from './components/AllLists.jsx'
function App(){

  const[list,setList] = useState([]);

  function addItem(listId,newItem){
    setList((prev) => prev.map((l) => l.id=== listId?{...l,
      items: [...l.items,newItem]}:l));
  }

  return(
  <div>
    <AddList setList={setList} />
    <AllLists list={list} addItem={addItem} />
      </div>)
}
export default App;
