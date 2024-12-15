import { createSlice } from "@reduxjs/toolkit";

const compteurSlice = createSlice({
  name: "compteur",
  initialState: {
    nombre: 0,
  },
  reducers: {
    incrementer: (state, action) => {
      state.nombre += 1;
    },
    decrementer: (state, action) => {
      state.nombre -= 1;
    },
  },
});

export default compteurSlice.reducer;
export const { incrementer, decrementer } = compteurSlice.actions;
