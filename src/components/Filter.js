import React from "react";


function Filter({ onCategoryChange, onSearchChange, selectedCategory, typedCategory }) {

 

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={typedCategory} />
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
