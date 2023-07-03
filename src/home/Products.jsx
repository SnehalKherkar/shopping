import {useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const  params  = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (params.category) {
      getAllProducts(params.category);
    }else{
      getAllProducts('/');
    }
  },[location]);
  
  const getAllProducts = (category) => {
    console.log(category);
    const url = category === '/' ? "https://fakestoreapi.com/products" : "https://fakestoreapi.com/products/category/" + category;
    axios.get(url).then((response) => {
      setProducts(response.data);
    })
  } 

  const dispatch = useDispatch();

  const add = (product) => {
    dispatch(addToCart(product))
  }
 
  return (
    <div>
      <Row>
        {products.map((product) => {
          return ( 
            <Col md={3} sm={4} xs={12} key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image}  onClick={() => { navigate('/product/' + product.id) }}
                 style={{width:'200px', height:'200px'}} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" onClick={()=>{ add(product)}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
    