import { createSlice} from "@reduxjs/toolkit";


const initialState = 
    {
       status : false,
       acesstoken :""
    }

export const dataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
       state.status = true,
       state.acesstoken = action.payload
       
    },

    removeUser: (state) => {
      state.status = false,
      state.acesstoken = ""
    },
  },
});
export const { addUser , removeUser } =
  dataSlice.actions;
//export const userSelector = (state: RootState) => state.;
export default dataSlice.reducer;