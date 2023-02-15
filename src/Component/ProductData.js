import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux'//for action fire
import {addToCart} from './Store/cart'
import Footer from "./Footer";

const ProductData = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart=(payload)=>{
    console.log(payload.title)
    dispatch(addToCart(payload.title))
   
  }

  const params = useParams();
  // console.log(params.id)

  useEffect(() => {
    setLoading(true);
    const promise = axios.get(`https://fakestoreapi.com/products/${params.id}`);
    promise.then((response) => {
      setLoading(false);
      setData(response.data);
    });
  }, []);


  if (loading) return <p><img src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg" alt=""/></p>;

  return (
    <div>
      <NavBar />
      {data && (
        <>
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '60%'
            }}
          >
            <div style={{
              margin: '20px',
            }}>
              <img src={data.image} alt="imag" width="300px" height="400px" />
            </div>
            <div style={{
              margin: '50px',
            }}>
              <p>{data.title}</p>
              <p>{data.description}</p>
              <p>$ {data.price}</p>
              <button onClick={()=>handleAddToCart(data)}>Add Cart</button>
            </div>
          </div>
          </>
      )}
      <Footer/>
    </div>
  );
};

export default ProductData;
