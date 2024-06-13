import React from "react";

function CategoryFilter({categories, filterByCategory, isSelected}) {

  const categoryButtons = categories.map(category => {
    return (
    <button
      key={category}
      onClick={filterByCategory}
      className={category === isSelected ? "selected" : ""}
      >
      {category}
    </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
