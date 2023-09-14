import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";
import debounce from "lodash/debounce";

const options = {
  method: "GET",
  url: "/search-suggestions",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    searchQuery: "",
  },
};

// export const searchCoin = createAsyncThunk("searchCoin", async () => {
//   try {
//     const response = await axiosInstance.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

export const searchCoin = createAsyncThunk(
  "searchCoin",
  async (searchQuery, thunkAPI) => {
    try {
      // Modify the options object to include the search query
      const updatedOptions = {
        ...options,
        params: {
          ...options.params,
          searchQuery,
        },
      };

      const response = await axiosInstance.request(updatedOptions);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Create a debounced version of searchCoin with a delay of 300 milliseconds
export const debouncedSearchCoin = debounce((searchQuery, dispatch) => {
  dispatch(searchCoin(searchQuery));
}, 300);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    searchData: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(searchCoin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchCoin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchData = action.payload;
    });
    builder.addCase(searchCoin.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default searchSlice.reducer;
