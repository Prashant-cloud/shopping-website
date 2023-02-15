import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCards from "./ProductCards";
import Footer from "./Footer";

const Product = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promise = axios.get("https://fakestoreapi.com/products");
    promise.then((response) => {
      setItems(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  if (loading) return <img src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt=""/>

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
          marginLeft: "50px",
        }}
      >
        {items.map((item) => {
          return (
            <>
              <Link
                to={`/${item.id}`}
                style={{
                  padding: "10px",
                  textDecoration: "none",
                  color: "black",
                }}>
                <ProductCards key={item.id} item={item} />
              </Link>
            </>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
