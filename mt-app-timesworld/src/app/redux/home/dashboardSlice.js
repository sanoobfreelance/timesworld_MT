import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountriList } from "./DashboardApi";

const initialState = {
  countriList: { data: [], loader: false },
  filterdata: [],
  filteredCountries: [],
};

export const countrielistAsync = createAsyncThunk(
  "dashboard/fetchList",
  async (amount) => {
    const response = await fetchCountriList(amount);
    console.log({ response });
    return response.data;
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    filterCountriesByRegion: (state, action) => {
      if (action.payload === "All") {
        state.filteredCountries = state.countriList.data;
      } else {
        state.filteredCountries = state.countriList.data.filter(
          (country) => country.region === action.payload
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(countrielistAsync.pending, (state) => {
        state.countriList.loader = true;
      })
      .addCase(countrielistAsync.fulfilled, (state, action) => {
        state.countriList.loader = false;
        state.countriList.data = action.payload;
        const uniqueRegions = [
          "All",
          ...new Set(action.payload?.map((country) => country.region)),
        ];

        state.filterdata = uniqueRegions;
        state.filteredCountries = action.payload;
      })
      .addCase(countrielistAsync.rejected, (state) => {
        state.countriList.loader = false;
      });
  },
});
export const { filterCountriesByRegion } = dashboardSlice.actions;

export default dashboardSlice.reducer;
