import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slice/coin";
import exchangeReducer from "./slice/exchange";
import newsReducer from "./slice/news";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    news: newsReducer,
    exchange: exchangeReducer,
  },
});
