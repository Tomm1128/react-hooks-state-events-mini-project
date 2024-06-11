import React from "react";

function CategoryFilter({categories, filterByCategory}) {
  const categoryButtons = categories.map(category => {
    return <button key={category} onClick={filterByCategory}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
