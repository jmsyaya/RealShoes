import "./Main.css";
import { useState } from "react";
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

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Main({ shoes, setShoes }) {
  console.log("Main", shoes);

  let navigate = useNavigate();

  // 버튼 횟수 관리
  const [count, setCount] = useState(0);

  //로딩 관리
  const [isLoading, setLoading] = useState(false);

  // 버튼이 클릭되면 jmsyaya.github.io/product.json 데이터 가져오기
  // ajax() ==> axios
  let getProduct = () => {
    //버튼이 클릭이 되면 카운트를 +1
    setCount(count + 1);

    //버튼 클릭 로딩중 메세지 보여주기
    setLoading(true);

    //더보기 카운트
    let url = "";
    if (count === 0) {
      url = "https://jmsyaya.github.io/product.json";
    } else if (count === 1) {
      url = "https://jmsyaya.github.io/product2.json";
    } else {
      alert("더이상 가져올 데이터가 없습니다.");
      return;
    }

    axios
      .get(url)
      .then((response) => {
        console.log(response);

        // response 에 data 가 존재한다면 setShoes를 통해 원본 데이터 변경
        if (response.data) {
          // 원본 데이터 직접 변경 불가
          let newArr = [...shoes, ...response.data];
          setShoes(newArr);
        }
        setLoading(false);
      })
      .catch(() => {
        console.log("에러");
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        <Row className="mx-3">
          {shoes.map((shoe) => (
            <Col key={shoe.id} md={3} className="mt-3">
              <div>
                <img
                  src={shoe.src}
                  alt={shoe.alt}
                  className="img-fluid d-block"
                />
                <div className="px-5 h5">
                  <p>
                    {/* http://localhost:3000/detail/제품아이디 */}
                    <a
                      onClick={(e) => {
                        /*href="#"*/
                        e.preventDefault();
                        navigate("/detail/" + shoe.id);
                      }}>
                      {shoe.pname}
                    </a>
                  </p>
                  <p>색상 : {shoe.color}</p>
                  <p>가격 : {shoe.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-3">
          <Button variant="outline-secondary" onClick={getProduct}>
            {isLoading ? "Loading..." : "더보기.."}
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Main;
