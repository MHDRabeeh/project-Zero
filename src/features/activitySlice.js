import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    client: 'MND',
    region: 'Prod',
    mailSub: "long run in DW_10ustry's standard dummy text ever since the 1500s",
    fromDate: '27/1/2025',
    fromTime: '3.00 PM',
    toDate: '28/1/2025',
    timeZone: 'EST',
    action: 'no action required',
    createdBy: {
      uid: 1,
      fname: 'test',
      lname: 'user',
      email: 'testuser@gmail.com',
      role: 'DEV',
    },
    createdAt: 12343430, // Timestamp
  },
  ];

  const activitySlice = createSlice({
    name:"activitySlice",
    initialState,
    reducers:{
        createActivity:(state,action)=>{
            state.push(action.payload)
        }
    }
  })
  export const {createActivity} = activitySlice.actions;
  export default activitySlice.reducer