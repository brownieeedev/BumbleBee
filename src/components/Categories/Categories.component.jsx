import React from "react";
import Category from "./Category.component";
import Nav from "../Nav/Nav.component";
import { kategoriak } from "../../assets/kategoriak";

function Categories() {
  return (
    <>
      <Nav></Nav>
      <div className="header-container">
        <img src="/images/bee.png" alt="" />
        <h1 className="mainHeader">BumbleBee</h1>
      </div>
      <Category categories={kategoriak}></Category>
    </>
  );
}

export default Categories;
