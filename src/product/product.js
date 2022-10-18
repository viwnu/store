import React from 'react';


import ProductCategory from './productCategory.js';
import productBase from './productBase.js';


export default function Product() {

  const productCategoriesForRender =   productBase.map((item, index) => {
      return(
        <ProductCategory
          key = {index}
          productCategoryIndex = {index}
        />
      )
    });

  return(
    productCategoriesForRender
  );
}
