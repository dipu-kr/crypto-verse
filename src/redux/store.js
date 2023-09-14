import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slice/coin";
import exchangeReducer from "./slice/exchange";
import newsReducer from "./slice/news";
import searchReducer from "./slice/searchCoin";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    search: searchReducer,
    news: newsReducer,
    exchange: exchangeReducer,
  },
});
