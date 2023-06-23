import {
  faCheckCircle,
  faCheckDouble,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 300, checked: false },
    { id: 2, name: "Product 2", price: 200, quantity: 100, checked: false },
    { id: 3, name: "Product 3", price: 300, quantity: 200, checked: true },
    { id: 4, name: "Product 4", price: 400, quantity: 400, checked: false },
    { id: 5, name: "Product 5", price: 500, quantity: 500, checked: true },
    { id: 6, name: "Product 6", price: 600, quantity: 600, checked: false },
  ]);

  const handleDeleteProduct = (product) => {
    const newProducts = products.filter((p) => p.id !== product.id);
    setProducts(newProducts);
  };

  const handleCheck = (product) => {
    const newProducts = products.map((p) => {
      if (p.id === product.id) {
        p.checked = !p.checked;
      }
      return p;
    });
    setProducts(newProducts);
  };

  return (
    <div className="card shadow-lg m-3">
      <div className="card-body">
        <h5 className="card-title">List products</h5>
        <div className="row">
          <div className="table responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>checked</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleCheck(product)}
                        className="btn btn-outline-success"
                      >
                        <FontAwesomeIcon
                          icon={product.checked ? faCheckCircle : faCircle}
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="btn btn-outline-danger"
                      >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
