import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

const options = {
  method: "GET",
  url: "/coins", // This will be appended to the baseURL
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
};

export const fetchCoins = createAsyncThunk("fetchCoins", async () => {
  try {
    const response = await axiosInstance.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default coinSlice.reducer;
