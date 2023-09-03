import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchange } from "../redux/slice/exchange";

const Exchnage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchange());
  }, []);

  const exchangeState = useSelector((state) => state.exchange);
  const getAllExchanges = exchangeState.exchangeData.data?.exchanges;
  const loading = exchangeState.isLoading;
  console.log(getAllExchanges);

  return (
    <div className="bg-[#1c1c1c] w-full min-h-[calc(45vh-70px)] h-auto">
      <Wrapper>
        <div className="py-10">
          <h5 className="text-white text-center text-xl md:text-2xl font-bold uppercase underline underline-offset-8">
            EXCHANGES
          </h5>
        </div>
        {loading ? (
          <div className="w-full h-[calc(45vh-70px)] flex items-center justify-center">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-10">
            {getAllExchanges?.length > 0 &&
              getAllExchanges?.map((coin, index) => (
                <div
                  key={index}
                  className="min-h-[220px] md:min-h-[250px] border-2 border-[gray] rounded-md py-3 px-2 md:py-6 md:px-4 drop-shadow-lg relative"
                >
                  <div className="w-[22px] h-[22px] md:w-[25px] md:h-[25px] absolute top-2 left-2 bg-[#1DB954] text-white text-xs rounded-full flex items-center justify-center">
                    {coin.rank}
                  </div>
                  <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] m-auto">
                    <img
                      src={coin.iconUrl}
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className="mt-4 h-[30px] bg-[#2c2929] rounded-md">
                    <p className="h-[30px] text-[lightgray] text-center flex items-center justify-center text-sm">
                      {coin.name}
                    </p>
                  </div>
                  <div className=" mt-4 flex flex-col gap-3">
                    <div className=" w-full h-[45px] md:h-[50px] bg-[#2c2929] rounded-md flex items-center justify-center flex-col p-1">
                      <span className="text-[lightgray] text-xs md:text-sm">
                        Number Of Markets
                      </span>
                      <span className="text-[gray] text-xs md:text-sm">
                        {typeof parseFloat(coin.numberOfMarkets) === "number"
                          ? parseFloat(coin.price).toFixed(1)
                          : "N/A"}
                      </span>
                    </div>
                    <div className=" w-full h-[45px] md:h-[50px] bg-[#2c2929] rounded-md flex items-center justify-center flex-col p-1">
                      <span className="text-[lightgray] text-xs md:text-sm">
                        Price
                      </span>
                      <span className="text-[gray] text-xs md:text-sm">
                        {typeof parseFloat(coin.price) === "number"
                          ? parseFloat(coin.price).toFixed(4)
                          : "N/A"}
                      </span>
                    </div>

                    <div className=" w-full h-[45px] md:h-[50px] bg-[#2c2929] rounded-md flex items-center justify-center flex-col p-1">
                      <span className="text-[lightgray] text-xs md:text-sm">
                        BtcPrice
                      </span>
                      <span className="text-[gray] text-xs md:text-sm">
                        {typeof parseFloat(coin.btcPrice) === "number"
                          ? parseFloat(coin.btcPrice).toFixed(6)
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Exchnage;
