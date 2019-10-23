import * as types from "./actionTypes";

const initialSignupState = {
  username: "",
  password: "",
  phoneNumber: ""
};

export const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.ON_SIGNUP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const initialLoginState = {
  username: "",
  password: ""
};
export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case types.LOGOUT:
    case types.LOGIN:
      return initialLoginState;
    case types.ON_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
const initialLoadingState = true;
export const loadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return initialLoadingState;
    case types.SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const initialPlantsState = [];
export const plantsReducer = (state = initialPlantsState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return initialPlantsState;
    case types.SET_PLANTS_LIST:
      return action.payload;
    default:
      return state;
  }
};
