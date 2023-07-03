import React from "react";
import { useSelector } from "react-redux";
import { Card,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function Cart() {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const remove = (index) => {
    dispatch(removeFromCart(index))
  }
  
  return (
    <div>
      {cartProduct.map((product,index) => {

      
     return <Card>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "200px", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            variant="danger"
            onClick={()=>{remove(index)}}
          >
            Remove From Cart
          </Button>
        </Card.Body>
      </Card>
      })}
    </div>
  );
}

export default Cart;
