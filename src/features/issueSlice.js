import { createSlice } from "@reduxjs/toolkit";
import { issueLog } from "../data";
const initialState = issueLog;
const issueSlice = createSlice({
  name: "issueSlice",
  initialState,
  reducers: {
    deleteRow: (state, action) => {
      const ticketNumberToDelete = action.payload;
      return state.filter(
        (issue) => issue.ticketNumber !== ticketNumberToDelete
      );
    },
    updateIssue: (state, action) => {
      const index = state.findIndex(
        (issue) => issue.ticketNumber === action.payload.ticketNumber
      );
      if (index !== -1) {
        console.log(action.payload);
       state[index] = action.payload; // Update the row data
      }
    },

    addIssueData: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
  },
});

export const { updateIssue, deleteRow, addIssueData } = issueSlice.actions;
export default issueSlice.reducer;
