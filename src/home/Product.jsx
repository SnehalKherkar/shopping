import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useParams } from "react-router-dom";

const Product = () => {
  const [single, setSingle] = useState({});
  const [rating, setRating] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setSingle(res.data);
      setRating(res.data.rating);
    });
  }, []);
  const dispatch = useDispatch();
  const addToCart1 = (productId) => {
    console.log(productId);
    dispatch(addToCart(productId));
  };
  return (
    <>
      {single && (
        <div style={{ marginTop: "4rem", width: "100%" }}>
          <Container>
            <Row>
              <Col md={6} xsm={12}>
                <img src={single.image} alt="" style={{width:"100%", height:"80vh"}} />
              </Col>
              <Col md={6} xsm={12}>
                <h4>{single.title}</h4>
                <span style={{textTransform:"uppercase"}}>
                  {single.category}
                </span>
                <br />
                <span>{single.description}</span>
                <h6>Price:{single.price} $</h6>
                <Button color="primery" onClick={() => addToCart1(single)}>
                  Add To Cart
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Product;
