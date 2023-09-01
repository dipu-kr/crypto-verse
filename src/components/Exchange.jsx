import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import exchange, { fetchExchange } from "../redux/slice/exchange";

const Exchnage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchange());
  }, []);
  const exchangeState = useSelector((state) => state.exchange);
  console.log(exchangeState);
  // const getAllCoins = exchangeState.data.data?.coins;
  // console.log(getAllCoins);

  return <div>Exchnage</div>;
};

export default Exchnage;
