import * as types from "./actionTypes";




const initialSignupState = {
  username: "",
  password: "",
  phoneNumber: "",
  plantsList: []
};

const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.ON_SIGNUP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
      case types.LOGIN:
        return initialSignupState;
      case types.ON_LOGIN_INPUT_CHANGE:
        return {
          ...state,
          ...action.payload
        };
      case types.ADD_PLANT:
        return {
          ...state,
          plantsList: [...state.plantsList, action.payload]
        }
      case types.EDIT_PLANT:
        return {
          
        }
      default:
        return state;
    }
  };
  



//     case types.LOGOUT:

// const initialLoadingState = true;
// const loadingReducer = (state = initialLoadingState, action) => {
//   switch (action.type) {
//     case types.LOGOUT:
//       return initialLoadingState;
//     case types.SET_LOADING:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// const initialPlantsState = [];
// export const plantsReducer = (state = initialPlantsState, action) => {
//   switch (action.type) {
//     case types.LOGOUT:
//       return initialPlantsState;
//     case types.SET_PLANTS_LIST:
//       return action.payload;
//     default:
//       return state;
//   }
// };
export default signupReducer;
