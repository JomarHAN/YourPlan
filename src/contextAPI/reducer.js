export const initialState = {
  userDisplay: null,
};

const reducer = (action, state) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userDisplay: action.userDisplay,
      };

    default:
      return state;
  }
};

export default reducer;
