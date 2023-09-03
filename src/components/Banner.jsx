import React, { useState, useEffect } from "react";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../redux/slice/coin";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Wrapper from "./Wrapper";

const Banner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  const coinState = useSelector((state) => state.coin);
  const getAllCoins = coinState.data.data?.coins;

  const loading = coinState.isLoading;

  let box = document.querySelector(".coin-slide");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className="banner_container relative">
      <div className="">
        <h1 className="text-white text-center text-xl md:text-2xl font-bold uppercase pt-[50px]">
          Crypto-verse
        </h1>
        <p className="text-white text-center capitalize pt-4 text-xs md:text-base">
          Get all the information about your favourite crypto currency
        </p>

        <div className="w-full absolute md:bottom-[25px] bottom-[30px]">
          <Wrapper>
            {loading ? (
              <div className="w-full h-[130px] flex items-center justify-center">
                <p className="text-white">Loading...</p>
              </div>
            ) : (
              <div className="relative flex items-center">
                <div className="w-full flex items-center justify-between absolute">
                  <button
                    className="text-white w-[30px] h-[30px] text-sm md:text-lg flex items-center justify-center bg-[#817c7c] rounded-full"
                    onClick={btnpressprev}
                  >
                    <LeftOutlined />
                  </button>
                  <button
                    className="text-white w-[30px] h-[30px] text-sm md:text-lg flex items-center justify-center bg-[#817c7c] rounded-full"
                    onClick={btnpressnext}
                  >
                    <RightOutlined />
                  </button>
                </div>

                <div className="w-ful flex gap-4 overflow-x-hidden scroll-smooth coin-slide">
                  {getAllCoins?.map((coin, index) => (
                    <div
                      key={index}
                      className="md:max-w-[100px} md:min-w-[100px] md:h-[100px] min-w-[70px] max-w-[70px] h-[70px] rounded-md border-[0.5px] border-[#585555] flex items-center justify-center"
                    >
                      <img
                        src={coin.iconUrl}
                        className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
