
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string | null;
  searchTerm: string;
}

const initialState: FilterState = {
  category: null,
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;

