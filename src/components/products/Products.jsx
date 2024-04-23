import React, { useEffect, useState } from "react";
import "./products.css";
import { Link, useParams } from "react-router-dom";

export default function Products() {
  const { idCate } = useParams();
  const [cate, setCate] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState(category);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState(products);

  // Call Category
  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch("https://api.duong.id.vn/api/categories");
      const data = await response.json();
      setCategory(data);
      setFilterCategory(data);
    };
    getCategory();
  }, []);

  //call Category Type
  useEffect(() => {
    const fetchCate = async () => {
      const responeCate = await fetch(
        `https://api.duong.id.vn/api/products/category/${idCate}`
      );
      const data = await responeCate.json();
      console.log(data);
      setCate(data);
    };
    fetchCate();
  }, [idCate]); // Thêm idCate vào dependency để useEffect chỉ chạy khi idCate thay đổi

  // Call Products
  useEffect(() => {
    const getProducts = async () => {
      const responseProducts = await fetch(
        "https://api.duong.id.vn/api/products"
      );
      const data = await responseProducts.json();
      setProducts(data);
      setFilterProducts(data);
    };
    getProducts();
  }, []);

  // Filter Category
  const CateProduct = (cate) => {
    if (cate) {
      const updateList = products.filter((x) => x.categoryId === cate);
      setFilterProducts(updateList);
    } else {
      return <div>Error!</div>;
    }
  };

  // Reload Page
  const Reload = (reload) => {
    if (reload) {
      const loadAgain = products;
      setFilterProducts(loadAgain);
    }
  };

  const ShowProducts = () => {
    return (
      <div className="row p-4">
        <div className="leftBar col-3 text-left">
          <Link
            to={"/"}
            className="fw-bold fs-3 text-decoration-none text-dark"
            onClick={() => Reload("reload")}
          >
            Category
          </Link>
          {filterCategory.map((category) => (
            <div className="mb-3 mt-3">
              <Link
                key={category.id}
                to={`/products/category/${category.id}`}
                className="fs-6 category"
                onClick={() => CateProduct(category.id)}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="rightBar col-9">
          <hr />
          <div className="rightBarTop d-flex">
            <p>Sort By</p>
            <p style={{ marginLeft: "30px" }}>Default</p>
            <p style={{ marginLeft: "150px", fontSize: "16px" }}>
              {filterProducts.length === 0
                ? "No products found"
                : `${filterProducts.length} products found`}
            </p>
          </div>
          <div className="rightbarCenter row">
            {filterProducts.map((products) => {
              const { id } = products;
              return (
                <Link
                  key={products.id}
                  to={`/products/id/${id}`}
                  className="card col-md-4 mb-3 text-decoration-none me-2 "
                  style={{ width: "18rem" }}
                >
                  <img
                    src="https://i.pinimg.com/474x/cc/2c/f1/cc2cf1509516b0fe79b2c4b64e642a0d.jpg"
                    className="card-img-top object-fit-cover"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-price">{products.price}$</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="rightBarBottom">1 2 3 4</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ShowProducts />
    </>
  );
}
