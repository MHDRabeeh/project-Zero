import { createSlice } from "@reduxjs/toolkit";
import { importUpadtes } from "../data";

const initialState = importUpadtes;

const impUpdateSlice = createSlice({
  name: "impUpdateSlice",
  initialState,
  reducers: {
    deleteUpdates: (state, action) => {
      return state = state.filter((state) => state.id !== action.payload.id);
    },
    clearAllUpdates:()=>{
      return [];
    },
    createUpdate:(state,action)=>{
     console.log(action.payload);
     state.push(action.payload)
     
    }
  },
});

export const { deleteUpdates,createUpdate,clearAllUpdates } = impUpdateSlice.actions;
export default impUpdateSlice.reducer;
