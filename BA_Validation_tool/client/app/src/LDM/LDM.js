import ListItem from "./ListItem/ListItem";
function LDM(){
    return (<section class="LDM">
    <input b="check: !hasPending" class="toggle-all" type="checkbox" />
    <label b="click: toggleItems" for="toggle-all">Mark all as complete</label>
    <ul class="list-item">
      <ListItem b="repeat: items, key: id" />
    </ul>
  </section>); 
} 
export default LDM;