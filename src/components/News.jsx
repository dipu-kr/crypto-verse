import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slice/news";

const News = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchNews());
  //   }, []);

  const newsState = useSelector((state) => state.news);
  console.log(newsState);
  return <div>News</div>;
};

export default News;
