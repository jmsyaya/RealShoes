import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Detail from "./components/Detail";
import Event from "./components/Event";
import One from "./components/One";
import Two from "./components/Two";
import Cart from "./components/Cart";

function App() {
  let navigate = useNavigate();
  const [shoes, setShoes] = useState([
    {
      id: 0,
      src: "/shoes/dior.jpg",
      alt: "나이키x디올 운동화",
      pname: "나이키 조던 1 x 디올 로우 OG Jordan 1 x Dior Low OG",
      color: "화이트 + 그레이",
      price: "12,466,800원",
    },
    {
      id: 1,
      src: "/shoes/gag1.jpg",
      alt: "소가죽 골프화",
      pname: "남성화 소가죽 다이얼 골프화 GF3002",
      color: "블랙 + 브라운",
      price: "69,000원",
    },
    {
      id: 2,
      src: "/shoes/nike1.jpg",
      alt: "나이키 운동화",
      pname: "[나이키] 에어포스 1 07 CW2288-111",
      color: "화이트",
      price: "139,000원",
    },
    {
      id: 3,
      src: "/shoes/newbalance1.jpg",
      alt: "뉴발란스 운동화",
      pname: "NHANZRK2",
      color: "화이트",
      price: "89,300원",
    },
  ]);

  return (
    <div>
      <Container className="my-2" fluid>
        <Row className="text-center">
          <Col>
            <Navbar.Brand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}>
              <img
                src="/logo-no-background.png"
                alt="로고"
                style={{ width: "200px", height: "124px" }}
                className="d-inline-block"
              />
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <NavDropdown title="전체 카테고리" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">운동화</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">구두</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  부추/워커
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Special</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">운동화</Nav.Link>
              <Nav.Link href="#link">구두</Nav.Link>
              <Nav.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/event/one");
                }}>
                이벤트
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/cart");
                }}>
                <span className="material-symbols-outlined">shopping_cart</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
