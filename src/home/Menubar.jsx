import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Menubar = () => {

  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const cartProducts = useSelector (state => state.cart)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => setCats(res.data))
  });
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate(`/`)}>
            <img
              src="https://us.123rf.com/450wm/wikagraphic/wikagraphic2011/wikagraphic201100096/158846217-initial-letter-logo-ke-company-name-blue-and-grey-color-on-circle-and-swoosh-design-vector-logotype.jpg?ver=6"
              style={{ width: "1cm" }}
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-auto" style={{textTransform:"uppercase"}}>
            {cats.map((cat) => ( 
            <Nav.Link onClick={() => navigate(`/${cat}`)} key={cat} className="text-light">{cat}</Nav.Link>
 
            ))}
            </Nav>
            <Nav>
            <Nav.Link onClick={() => navigate(`/cart`)} className="text-light">Cart({cartProducts.length})</Nav.Link>
            </Nav>
        </Container>   
      </Navbar>  
    </div>
  );
};

export default Menubar;
