import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

const options = {
  method: "GET",
  url: "/exchanges",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    limit: "50",
    offset: "0",
    orderBy: "24hVolume",
    orderDirection: "desc",
  },
};

export const fetchExchange = createAsyncThunk("fetchExchange", async () => {
  try {
    const response = await axiosInstance.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const exchangeSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    exchangeData: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchange.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExchange.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newsData = action.payload;
    });
    builder.addCase(fetchExchange.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default exchangeSlice.reducer;
