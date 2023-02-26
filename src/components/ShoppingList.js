import React,{useState} from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList({ items }) {
  const[selectedCategory, updateState] = useState("ALL")
  //function Changeit(){
  function handleChange(event){
    
    let selectedValue =event.target.value
 
    updateState(selectedValue)
    

    
    
    // updateState((selectedCategory) => selectedCategory !== selectedValue? selectedValue : selectedValue)
  }
//}

 let filterItems = items.filter(item => {
  console.log(item)
    if(selectedCategory ===  "ALL"){ return true}
    else if(item.category === selectedCategory){ 
            return item }

 })

  return (
    
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        {console.log(selectedCategory)}
      </div>
      <ul className="Items">
        {filterItems.map((item) => {
         return <Item key={item.id} name={item.name} category={item.category} />
          
          // if("ALL" === selectedCategory){return <Item key={item.id} name={item.name} category={item.category} />}
          // else if(item.category === selectedCategory){ 
          //   return <Item key={item.id} name={item.name} category={item.category} />}
          
       })
        
        
        }

      </ul>
      
      
    </div>
  );
}

export default ShoppingList;
