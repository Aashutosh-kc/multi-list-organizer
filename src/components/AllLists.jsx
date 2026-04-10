import ListItem from './ListItem.jsx'
import './AllLists.css'
function AllLists({list,addItem}){
	return (
	<div className="all-list">
		{list.map((n) => (<div key={n.id}>
			<ListItem list={n} addItem={addItem} /></div>))}
	</div>)
}
export default AllLists;