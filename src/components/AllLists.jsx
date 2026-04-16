import ListItem from './ListItem.jsx'
import './AllLists.css'

function AllLists({list,addItem,setList}){
	function removeListItem(id){
  setList((prev) => prev.filter((n) => (n.id ==! id )));
  }
	const COLORS = ['#6366f1','#ec4889','#10b981','#f59e0b','#3b82f6'];
	return (
	<div className="all-list">
		{list.map((n,index) => (
			<ListItem key={n.id} list={n} addItem={addItem} color={COLORS[index % COLORS.length]} removeListItem={removeListItem} />))}
	</div>)
}
export default AllLists;