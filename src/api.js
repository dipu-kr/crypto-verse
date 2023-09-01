import axios from "axios";

const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com", // API base URL
  headers: {
    "X-RapidAPI-Key": "7e9449bcf9msh20e3088af44cf4dp1a72f2jsn171b68400c3a",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});

export default instance;

export const newsInstance = axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com", // API base URL
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "7e9449bcf9msh20e3088af44cf4dp1a72f2jsn171b68400c3a",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
});
