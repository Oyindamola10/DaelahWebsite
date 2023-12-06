import React from "react";
import "../SideBar.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-title2">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Men
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Women
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark" /> Accessories
        </label>
      </div>
    </div>
  );
};

export default Category;
