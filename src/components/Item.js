import React,{useState} from "react";

function Item({ name, category }) {
  const [state,setState] = useState(false)

  function tuggle(){
    setState((state)=> !state)

  }
  let cartStatusClass = state? "in-cart" : ""
  let cartStatus = state? "Remove From Cart": "Add to Cart"

  return (
    <li className={cartStatusClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={tuggle}className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
