import * as types from "./actionTypes";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
  plantsList: null,
  // editPlantId: 0
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
    case types.EDIT_PLANT:
      return {
        ...state,
        plantslist: state.plantsList.map(plant =>
          plant.id === action.payload.id ? action.payload : plant
        )
      };
    case types.DELETE_PLANT:
      console.log("this is from the delete reducer", action.payload)
      return {
        ...state,
        plantsList: state.plantsList.filter(
          plant => plant.id !== action.payload
        )
      };

    case types.GET_PLANT:
      console.log("make it into get plant reducer")
      return {
        ...state,
        plantsList: action.payload
      }
    default:
      return state;
  }
};


export default signupReducer;
