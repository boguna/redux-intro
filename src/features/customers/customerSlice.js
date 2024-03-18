import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
      },
    },
    updateName(state, action) {
      state.fullname = action.payload;
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullname: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullname, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullname, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullname) {
//   return {
//     type: "customer/updateName",
//     payload: fullname,
//   };
// }
