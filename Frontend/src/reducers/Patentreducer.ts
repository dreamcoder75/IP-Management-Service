import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const PatentReducer = createSlice({
  name: "Patent",
  initialState,
  reducers: {
    setPatentData: (state: any, action: PayloadAction<any>) => {
      state.data = action?.payload;
    },
  },
});

export const { setPatentData } = PatentReducer.actions;

export default PatentReducer.reducer;
export { initialState };
