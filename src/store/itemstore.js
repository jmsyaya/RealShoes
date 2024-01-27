import { configureStore, createSlice } from "@reduxjs/toolkit";

let carts = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    addCount(state, action) {
      //특정 상품의 count=count+1

      // 사용자가 선택한 사품의 아이디 가져오기
      let id = action.payload;
      //아이디를 이용해 특정 상품 찾기
      let product = state.find((cart) => cart.id == id);
      // 특정 상품 갯수 증가
      product.count += 1;
    },
    subtractCount(state, action) {
      // 사용자가 선택한 사품의 아이디 가져오기
      let id = action.payload;
      //아이디를 이용해 특정 상품 찾기
      let product = state.find((cart) => cart.id == id);
      // 특정 상품 갯수 감소
      product.count -= 1;
    },
    addCart(state, action) {
      //넘어온 상품 정보 가져오기
      let product = action.payload.shoe;
      //구입 개수 가져오기
      let amount = action.payload.amount;

      let item = {
        id: product.id,
        pname: product.pname,
        count: Number(amount),
      };
      state.push(item);
    },
    subCart(state, action) {
      //삭제를 선택한 상품 아이디 가져오기
      let deleteProduct = state.findIndex((item) => item.id == action.payload);
      state.splice(deleteProduct, 1);
    },
  },
});

export let { addCount, subtractCount, addCart, subCart } = carts.actions;

export default configureStore({
  reducer: {
    carts: carts.reducer,
  },
});
