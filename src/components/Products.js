import {
  faCheckCircle,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import App from "../App/App";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = () => {
    App.getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = (product) => {
    App.deleteProduct(product.id)
      .then((response) => {
        handleGetProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheck = (product) => {
    App.checkProduct.(product)
    .then((response) => {

    })
    .catch((error) => {
      console.log(error);
    })
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
