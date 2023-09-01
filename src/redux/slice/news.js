import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsInstance } from "../../api";

const options = {
  method: "GET",
  url: "/news",
  params: {
    safeSearch: "Off",
    textFormat: "Raw",
  },
};

export const fetchNews = createAsyncThunk("fetchNews", async () => {
  try {
    const response = await newsInstance.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    newsData: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newsData = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default newsSlice.reducer;
