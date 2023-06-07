import React from "react";
import Item from "../Items/Item.component";

function Category({ categories }) {
  return (
    <>
      <div className="categories-container">
        {categories.map((category) => (
          <Item key={category.id} category={category}></Item>
        ))}
      </div>
    </>
  );
}

export default Category;
