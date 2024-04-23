import React, { useEffect, useState } from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const respone = await fetch(
        `https://api.duong.id.vn/api/products/id/${id}`
      );
      const data = await respone.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);
  //if (!Object.keys(product).length > 0) return <div>Product not found</div>;

  return (
    <div className="productContainer">
      <Link to={"/"} className="text-decoration-none text-dark iconBack">
        <div className="back">
          <ArrowBackIos />
        </div>
      </Link>

      <div className="infoProduct d-flex mt-3">
        <div className="col-6">
          <img
            src="https://i.pinimg.com/474x/25/b8/66/25b8666ade237d40ecc3383f629618c8.jpg"
            alt=""
            className="productImg"
          />
        </div>
        <div className="aboutProduct col-6">
          <p className="productName fw-bold fs-4">{product.name}</p>
          <div className="rateProduct">5 star</div>
          <p className="productPrice fs-4 text-danger">{product.price}$</p>
          <p className="productDesc">{product.description}</p>
          <div className="d-flex">
            <div className="chooseNumber d-flex">
              <div className="minus">-</div>
              <input className="inputNumber" type="text" placeholder="1" />
              <div className="plus">+</div>
            </div>
            <button className="addCard" type="submit">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
      <div className="review">
        <hr className="daddy mt-5" />
        <span className="child">Description</span>
        <span className="childs">Review</span>
      </div>
      <div className="productText">
        <p className="fw-bold fs-5 mt-5 mb-4">Product Information</p>
        <p>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
          Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac
          diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
          congue leo eget malesuada. Vivamus suscipit tortor eget felis
          porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum
          sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
        </p>
        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies
          ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum
          porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a.
        </p>
      </div>
      <div className="related"></div>
    </div>
  );
}
