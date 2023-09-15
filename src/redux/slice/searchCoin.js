import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";
import debounce from "lodash/debounce";

// const options = {
//   method: "GET",
//   url: `/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&searchQuery=${searchQuery}`,
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     searchQuery: "",
//   },
// };

const BASE_URL = "https://coinranking1.p.rapidapi.com";

export const searchCoin = createAsyncThunk(
  "searchCoin",
  async (searchQuery, thunkAPI) => {
    try {
      // Modify the options object to include the search query
      // const updatedOptions = {
      //   ...options,
      //   params: {
      //     ...options.params,
      //     searchQuery,
      //   },
      // };

      // const response = await axiosInstance.request(updatedOptions);
      // return response.data;
      // Construct the URL with the search query
      const url = `${BASE_URL}/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&searchQuery=${searchQuery}`;

      // Make the API request
      const response = await axios.get(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7e9449bcf9msh20e3088af44cf4dp1a72f2jsn171b68400c3a",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
        },
      });

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
