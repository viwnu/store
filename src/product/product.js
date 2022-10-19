import React from 'react';


import ProductCategory from './productCategory.js';
import productBase from './productBase.js';


export default function Product() {
  return(
    <section>
      <ul>
      {
        productBase.map((item, index) => {
          return (
            <li key = {index}>
              <ProductCategory
                productCategoryIndex = {index}
              />
            </li>
          )
        })
      }
      </ul>
    </section>
  );
}
