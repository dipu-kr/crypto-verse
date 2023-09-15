import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { debouncedSearchCoin } from "../redux/slice/searchCoin";
import { SearchOutlined } from "@ant-design/icons";

const Coins = () => {
  // const [allCoins, setAllCoins] = useState(getAllCoins);
  // console.log(allCoins);
  const coinState = useSelector((state) => state.coin);
  const getAllCoins = coinState.data.data?.coins;
  const loading = coinState.isLoading;
  // console.log(getAllCoins);

  const [allCoins, setAllCoins] = useState(getAllCoins);
  console.log(allCoins);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [hasSearchResults, setHasSearchResults] = useState(true);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Dispatch the debounced action with the search query
    debouncedSearchCoin(query, dispatch);
  };

  const searchState = useSelector((state) => state.search);
  console.log(searchState);
  const getSearchValue = searchState.searchData.data?.coins;
  // console.log(searchState.searchData.data?.coins);

  // useEffect
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setSearchPerformed(true); // User has performed a search
      setAllCoins(getSearchValue);
      setHasSearchResults(getSearchValue && getSearchValue.length > 0);
    } else {
      setSearchPerformed(false); // User cleared the search
      setAllCoins(getAllCoins);
      setHasSearchResults(true); // Reset to default state
    }
  }, [searchQuery, getAllCoins, getSearchValue]);

  return (
    <div className="bg-[#1c1c1c] w-full min-h-[calc(45vh-70px)] h-auto">
      <Wrapper>
        <div className="w-full h-[100px] flex items-center justify-center md:justify-end pt-6 pb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="border border-[gray] bg-transparent w-[90%] md:w-[35%] h-[45px] rounded-md pl-4 outline-none text-[lightgray]"
          />
        </div>
        {loading ? (
          <div className="w-full h-[calc(45vh-70px-100px)] flex items-center justify-center">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-10">
            {hasSearchResults && allCoins?.length > 0 ? (
              allCoins?.map((coin, index) => (
                <div
                  key={index}
                  className="min-h-[220px] md:min-h-[250px] border-2 border-[gray] rounded-md py-3 px-2 md:py-6 md:px-4 drop-shadow-lg"
                >
                  <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] m-auto">
                    <img
                      src={coin.iconUrl}
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className="mt-4 h-[30px] bg-[#2c2929] rounded-md">
                    <p className="h-[30px] text-[lightgray] text-center flex items-center justify-center text-sm">
                      {coin.symbol}
                    </p>
                  </div>
                  <div className=" mt-4 flex justify-between gap-3">
                    <div className=" w-[50%] h-[60px] bg-[#2c2929] rounded-md flex items-center justify-center flex-col p-1">
                      <span className="text-[lightgray] text-xs md:text-sm">
                        Price
                      </span>
                      <span className="text-[gray] text-xs md:text-sm">
                        {typeof parseFloat(coin.price) === "number"
                          ? parseFloat(coin.price).toFixed(1)
                          : "N/A"}
                      </span>
                    </div>
                    <div className=" w-[50%] h-[60px] bg-[#2c2929] rounded-md flex items-center justify-center flex-col p-1">
                      <span className="text-[lightgray] text-xs md:text-sm">
                        Change
                      </span>
                      <span className="text-[gray] text-xs md:text-sm">
                        {coin.change}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Link to={`/coin/${coin.uuid}`}>
                      <button className="w-[100%] py-2 bg-[#1DB954] rounded-md shadow-lg outline-none border-none uppercase text-xs md:text-sm">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-white text-center">
                {searchPerformed ? "No results found" : "Loading..."}
              </div>
            )}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Coins;
