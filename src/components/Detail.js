import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Table,
  Form,
} from "react-bootstrap";

import { addCart } from "../store/itemstore";
import { useDispatch } from "react-redux";

function Detail({ shoes }) {
  //itemstore 함수 호출
  let dispatch = useDispatch();

  let navigate = useNavigate();

  // 주소줄에 따라오는 값(0, 1, 2..)을 받아내기 위해 필요
  //http://localhost:3000/detail/0
  const { id } = useParams();

  //   console.log("id", id);
  //   console.log(shoes[id]);

  let shoe = shoes[id];

  // 이벤트 변수관리
  const [discount, setDiscount] = useState(
    <Col>
      <Alert variant="danger">해당 상품을 3초내에 구입시 10% 추가 할인</Alert>
    </Col>
  );

  //수량 관리
  const [amount, setAmount] = useState(0);

  // 상품 상세보기에서 이벤트 페이지 보여주기 및 없애기
  useEffect(() => {
    console.log("마운트 될 때 / 업데이트 될 때");

    //3ch 시간재기
    let timeout = setTimeout(() => {
      setDiscount(null);
    }, 3000);

    //수량에 문자가 들어가는 것 방지 : isNaN Nan:Not a number
    if (isNaN(amount)) {
      alert("수량을 확인해 주세요");
      setAmount(0);
    }

    return () => {
      console.log("언마운트 될 때");
      clearTimeout(timeout);
    };
  }, [amount]);

  //div 부모태그 생성할 것
  return (
    <>
      <Container>
        {shoe ? (
          <div>
            <Row>{discount}</Row>
            <Row className="mt-3">
              <Col>
                <img
                  src={shoe.src}
                  alt={shoe.alt}
                  style={{ width: "600px", height: "600px" }}
                />
              </Col>
              <Col className="align-self-center">
                <Table>
                  <tbody>
                    <tr>
                      <td>제품명</td>
                      <td>
                        <b>{shoe.pname}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>색상</td>
                      <td>
                        <b>{shoe.color}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>가격</td>
                      <td>
                        <b>{shoe.price}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>구매수량</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="수량"
                          id="amount"
                          name="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {/* <h3 className="my-3">{shoe.pname}</h3>
                <h4 className="my-3">{shoe.color}</h4>
                <h4 className="my-3">{shoe.price}</h4> */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    //수량이 0이라면 경고창 띄우기
                    if (amount == 0) {
                      alert("수량을 확인해 주세요");
                      return;
                    }

                    if (window.confirm("장바구니로 이동하시겠습니까?")) {
                      dispatch(addCart({ shoe, amount }));
                      navigate("/cart");
                    }
                  }}>
                  구매하기
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>상품 번호를 확인해 주세요.</Row>
        )}

        <ProductNavTab></ProductNavTab>
      </Container>
    </>
  );
}

//탭이 클릭될 때에 보여줄 내용을 가지고 있는 컴포넌트
function TabContents({ tabs }) {
  if (tabs == 0) {
    return (
      <div>
        첫번째 탭-Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam nostrum officiis ullam reprehenderit fuga unde sit. Alias
        explicabo architecto aut amet maiores accusantium reiciendis dolores
        impedit, vel tempore non veritatis.
      </div>
    );
  } else if (tabs == 1) {
    return (
      <div>
        두번째 탭-Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam nostrum officiis ullam reprehenderit fuga unde sit. Alias
        explicabo architecto aut amet maiores accusantium reiciendis dolores
        impedit, vel tempore non veritatis.
      </div>
    );
  } else {
    return (
      <div>
        세번째 탭-Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam nostrum officiis ullam reprehenderit fuga unde sit. Alias
        explicabo architecto aut amet maiores accusantium reiciendis dolores
        impedit, vel tempore non veritatis.
      </div>
    );
  }
}

function ProductNavTab() {
  // 탭의 상태 변수
  const [tabs, setTab] = useState(0);

  const onClick = (e) => {
    let id = e.target.id;

    if (id == 0) {
      setTab(0);
    } else if (id == 1) {
      setTab(1);
    } else {
      setTab(2);
    }
  };

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" onClick={onClick} id={0}>
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={onClick} id={1}>
            Review
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={onClick} id={2}>
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabs={tabs} />
    </>
  );
}
export default Detail;
