export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // 제일 처음에 나오는 인덱스 반환
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      console.log(index);
      if (index >= 0) {
        newBasket.splice(index, 1); // 해당 인덱스 빼내기 -> arr에 해당 인덱스에 해당하는 값이 하나 빠진다.
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
