import { useEffect, useState } from "react";
import ResCard , { withPromotedLabel} from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { restaurantAPI } from "../utils/MockData";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppBody = () => {
  const [resList, setResList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [searchText, setSearchText] = useState("");
    const PromotedCard=withPromotedLabel(ResCard);
  const fetchData = async () => {
    try {
      const data = await fetch(restaurantAPI);
      const jsonData = await data.json();
      setResList(jsonData);
      setMasterList(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchRes = () => {
    const filtered = masterList?.filter((item) =>
      item?.restaurantName
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setResList(filtered);
  };

  const online = useOnlineStatus();
  const [openFlag,setOpenFlag]=useState(false);
  if (!online) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-500 mt-10">
        🚫 Looks like you are Offline
      </h1>
    );
  }

  return (
    <div className="px-6 py-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      
      {/* 🔍 Search Section */}
      <div className="flex flex-wrap items-center gap-4 mb-8 
                      bg-white dark:bg-gray-800 
                      p-4 rounded-xl shadow-sm dark:shadow-gray-900/30">
        
        <input
          className="border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 
                     text-gray-800 dark:text-gray-100
                     rounded-lg px-4 py-2 w-64 
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchRes();
          }}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg 
                     hover:bg-blue-600 active:scale-95 
                     transition duration-200"
          onClick={searchRes}
        >
          🔍 Search
        </button>

        <button
          className={`bg-${!openFlag ? 'green' : 'red'}-500 text-white px-4 py-2 rounded-lg 
                     hover:bg-${!openFlag ? 'green' : 'red'}-600 active:scale-95 
                     transition duration-200`}
          onClick={() => {
            setOpenFlag(!openFlag)
            const filteredList = masterList?.filter(
              (item) => item?.parkingLot
            );
          {!openFlag ?   setResList(filteredList) : setResList(masterList)}
          }}
        >
          ⭐ {!openFlag ?  'Open Now' : 'See All'}
        </button>
      </div>

      {/* 🧾 Restaurant Grid */}
      {resList?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resList.map((item) => (
            <Link
              key={item?.restaurantID}
              to={`/restaurant/${item?.restaurantID}`}
              className="hover:scale-[1.02] transition duration-200"
            >
                {item?.restaurantID>25 ? <PromotedCard resData={item}/> :
              <ResCard resData={item} />}
            </Link>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default AppBody;