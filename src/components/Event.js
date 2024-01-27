import { Outlet } from "react-router-dom";
import { Stack, Badge } from "react-bootstrap";

function Event() {
  return (
    <>
      <div className="mt-5">
        <Stack direction="horizontal" gap={3}>
          <h1 className="mx-3">Today 이벤트</h1>
          <h4>
            <Stack direction="horizontal" gap={3}>
              <a href="/event/one">
                <Badge bg="primary">회원가입</Badge>
              </a>
              <a href="/event/two">
                <Badge bg="danger">생일쿠폰</Badge>
              </a>
            </Stack>
          </h4>
        </Stack>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Event;
