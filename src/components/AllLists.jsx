import List from './List.jsx'
import './AllLists.css'

export default function AllLists({list,addItem,setList}){

	function removeList(id){
  setList((prev) => prev.filter((n) => (n.id !== id )));
  }
	function removeListItem(listId,itemId){
	setList((prev)=>prev.map((l)=> l.id===listId?{...l,items: l.items.filter((item)=>(item.id !== itemId))}: l ))
}
	const COLORS = ['#6366f1','#ec4889','#10b981','#f59e0b','#3b82f6'];

	return (
	<div className="all-list">
		{list.map((n,index) => (
			<List key={n.id} list={n} addItem={addItem} 
			color={COLORS[index % COLORS.length]} removeList={removeList} removeListItem={removeListItem}/>))}
	</div>
	)
}
