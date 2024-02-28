import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../categories-preview/categories-preview.components";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
