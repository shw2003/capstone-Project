import React, { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./categories.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const categoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        // <Fragment key={title}>
        //   <h2>{title}</h2>
        //   <div className="products-container">
        //     {categoriesMap[title].map((product) => (
        //       <ProductCard key={product.id} product={product} />
        //     ))}
        //   </div>
        // </Fragment>
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>

    // <div className="products-container">
    //   {products.map((product) => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>
  );
};

export default categoriesPreview;
