import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "notification",
  initialState: {
    testCount: 0,
  },
  reducers: {
    setTestCount: (state: any, action: any) => {
      console.log("redux setUnReadChatCnt", action.payload);
      state.unReadChatCnt = action.payload;
    },
  },
});
export const { setTestCount } = counterSlice.actions;
export default counterSlice.reducer;
