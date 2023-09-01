import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";

const Details = () => {
  const coinState = useSelector((state) => state.coin);
  const getAllCoins = coinState.data.data?.coins;
  const { id } = useParams();

  let singleCoin = getAllCoins?.filter((coin) => coin.uuid === id);
  return (
    <div className="w-full min-h-[calc(45vh-70px)] h-auto bg-[#1c1c1c] pb-8">
      <Wrapper>
        <div>
          <div className="py-6">
            <h5 className="text-white text-center text-xl md:text-2xl font-bold uppercase">
              Coin Details
            </h5>
          </div>
          <div>
            {singleCoin?.map((coin, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-col"
              >
                <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] my-6">
                  <img src={coin.iconUrl} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 ">
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Name
                    </span>
                    <span className="w-[50%] text-white text-center text-xs md:text-sm">
                      {coin?.name}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Symbol
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.symbol}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Rank
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.rank}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      MarketCap
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.marketCap}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Price
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.price}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Change
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.change}
                    </span>
                  </div>
                  <div className="w-full border border-[gray] py-1 rounded-md flex justify-around">
                    <span className="w-[50%] text-center text-[lightgray] text-xs md:text-sm">
                      Listed At
                    </span>
                    <span className="w-[50%] text-center text-white text-xs md:text-sm">
                      {coin?.listedAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Details;
