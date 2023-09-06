const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    cratedAt: "",
  };
  
  
  
export default function customerReducer(state = initialStateCustomer, action) {
    switch (action) {
      case "customer/createCustomer":
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalID: action.payload.nationalID,
          createAt: action.payload.createAt,
        };
  
      case 'custmer/updateName':
          return {...state, fullName: action.payload}
  
        default:
          return state
    }
  }
  
  
  
  
  
  //Action creators
export function createCustomer(fullName, nationalID) {
    return {
      type: "customer/createCustomer",
      payload: { fullName, nationalID, createdAt: new Date().toISOString() },
    };
  }
  
export function updateName(fullName) {
    return { type: "account/updateName", payload: fullName };
  }
  