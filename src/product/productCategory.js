import React from 'react';


import ProductCard from './productCard.js';
import productBase from './productBase.js';

import './porductCategory.css'

export default function ProductCategory({productCategoryIndex}) {
  return (
    <div className="productCategory">
      <div className="productCategoryHeader">
        <h1>{productBase[productCategoryIndex].productCategoryName}</h1>
      </div>
      <ul className="products">
        {
          productBase[productCategoryIndex].products.map((item, index) => {
            return (
              <li key = {index}>
                <ProductCard
                  productCategoryIndex = {productCategoryIndex}
                  productIndex = {index}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
