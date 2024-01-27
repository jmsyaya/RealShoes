import { Container, Table, Stack, Button } from "react-bootstrap";

import { addCount, subtractCount, subCart, addCart } from "../store/itemstore";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  //기존 cart 정보 가져오기
  let allState = useSelector((state) => {
    return state;
  });

  let carts = allState.carts;
  console.log(carts);

  //itemstore 함수 호출
  let dispatch = useDispatch();

  return (
    <>
      <Container className="table mt-5">
        <Table bordered>
          <thead>
            <tr>
              <th>상품번호</th>
              <th>상품명</th>
              <th>수량</th>
              <th>수량변경</th>
              <th>취소</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {carts.map((cart, idx) => (
              <tr className="align-middle" key={idx}>
                <td>{idx + 1}</td>
                <td>{cart.pname}</td>
                <td>{cart.count}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button
                      variant="warning"
                      onClick={() => {
                        dispatch(addCount(cart.id));
                      }}>
                      +
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(subtractCount(cart.id));
                      }}>
                      -
                    </Button>
                  </Stack>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "해당 상품을 장바구니에서 삭제하시겠습니까?"
                        )
                      ) {
                        dispatch(subCart(cart.id));
                      }
                    }}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
