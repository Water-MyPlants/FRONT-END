import * as types from "./actionTypes";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
  plantsList: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.ON_SIGNUP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    case types.LOGIN:
      return initialState;
    case types.ON_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
      case types.ADD_PLANT:
        return {
          ...state,
          plantsList: [...state.plantsList, action.payload],
          
        };
        case types.GET_USER:
        return {
          ...state,
          username: action.payload,
          phoneNumber: action.payload
        };

      case types.EDIT_USER:
        return {
          ...state,
          username: state.username !== action.payload ? action.payload : state,
          phoneNumber: state.phoneNumber !== action.payload ? action.payload : state,
        }
    case types.EDIT_PLANT:
      return {
        ...state,
        plantslist: state.plantsList.map(plant =>
          plant.id === action.payload.id ? action.payload : plant
        )
      };
    case types.DELETE_PLANT:
      return {
        ...state,
        plantsList: state.plantsList.filter(
          plant => plant.id !== action.payload
        )
      };

    case types.GET_PLANT:
      return {
        ...state,
        plantsList: action.payload
      }
    default:
      return state;
  }
};


export default signupReducer;
