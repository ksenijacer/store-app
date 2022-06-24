import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ProductsTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th width="100">Id</th>
            <th width="300">Name</th>
            <th width="400">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, category}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;