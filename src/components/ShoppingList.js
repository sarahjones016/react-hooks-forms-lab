import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typedCategory, setTypedCategory] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleTypedChange(event) {
    setTypedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && typedCategory === "") return true;

    return item.category === selectedCategory || item.name === typedCategory 
  });

  function onItemFormSubmit(item) {
    console.log(item)

    setItems([...itemsToDisplay, item])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleTypedChange} selectedCategory={selectedCategory} typedCategory={typedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;