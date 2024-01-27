import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container className="border-top mt-5" fluid>
        <Row className="justify-content-md-center my-3">
          <Col sm className="px-4">
            <h3>Real Shoes</h3>
            <div className="small text-secondary">
              <span className="d-block">경기도 안양시 동안구 관평로 333</span>
              <span className="d-block">
                TEL : 010 - 2077 - 5805 / MAIL
                <a
                  href="mailto:jmsyaya@naver.com"
                  className="d-inline-block mx-1">
                  jmsyaya@naver.com
                </a>
              </span>
            </div>
          </Col>
          <Col sm>
            <h4>010-2077-5805</h4>
            <div className="small text-secondary">
              <span className="d-block">평일 10:00 - 17:30</span>
              <span className="d-block">점심 12:00 - 13:00</span>
              <span className="d-block">휴일 토/일/공휴일</span>
            </div>
          </Col>
          <Col sm>
            <h4>배송</h4>
            <div className="small text-secondary">
              <span className="d-block">타 택배 반품 시 :</span>
              <span className="d-block">경기도 안양시 동안구 관평로 333</span>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="px-4 text-secondary">
            COPYRIGHT &copy; RealShoes. ALL RIGHTS RESERVED.
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
