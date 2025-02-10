import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      client: "Mark",
      region: "Otto",
      issueClassification: "@mdo",
      issueDetails: "Mark",
      shiftHandledBy: "Otto",
      issueAssignedTo: "Mark",
      status: "Pending",
      comment: "@mdo",
    },
    {
      id: 2,
      client: "Jacob",
      region: "Thornton",
      issueClassification: "@fat",
      issueDetails: "Mark",
      shiftHandledBy: "Otto",
      issueAssignedTo: "Mark",
      status: "Completed",
      comment: "@mdo",
    },
    {
      id: 3,
      client: "Larry",
      region: "Wild",
      issueClassification: "@twitter",
      issueDetails: "Mark",
      shiftHandledBy: "Otto",
      issueAssignedTo: "Mark",
      status: "Pending",
      comment: "@mdo",
    },
  ],
};

const issueSlice = createSlice({
  name: "issueSlice",
  initialState,
  reducers: {
    deleteRow: (state, action) => {
      console.log(
        "this is state>>>>>",
        state,
        "this is action>>>>>>",
        action,
        "from delete"
      );
    },
    editRow: (state, action) => {
      console.log(
        "this is state>>>>>",
        state,
        "this is action>>>>>>",
        action,
        "from edit"
      );
    },
  },
});

export const {editRow,deleteRow}=issueSlice.actions
export default issueSlice.reducer
