// import { useEffect, useState } from "react"

// function App() {

//   const [data, setData] = useState([])

//   useEffect(() => {
//     const apiCall = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/`);
//         const resData = await response.json();

//         setData(resData);

//         console.log("Fetched data:", resData);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     apiCall();
//   }, []);

//   return (
//     <>
//       <div className="bg-black h-screen flex flex-col p-2 gap-4">
//         <div className="border border-white rounded-xl p-2 gap-4 grid">
//           <p className="text-white text-xl">{data[0]?.headline.main || "Loading..."}</p>
//           <p className="text-white">{data[0]?.abstract}</p>
//           <p className="text-gray-500">{data[0]?.byline.original}</p>
//           <img src={`${data[0]?.multimedia[3].legacy.thumbnail }`} alt="" />
//         </div>
      
//         { data.map((items)=>(
//           <div className="bg-black h-screen flex flex-col p-2 gap-4" key={items._id}>
//             <div className="border border-white rounded-xl p-2 gap-4 grid">
//               <p className="text-white text-xl">{items?.headline.main || "Loading..."}</p>
//               <p className="text-white">{items?.abstract}</p>
//               <p className="text-gray-500">{items?.byline.original}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    const response = await fetch(`http://localhost:3000/?page=${page}&limit=50`);
    const newData = await response.json();
    const items = newData.data || [];
    console.log(items)

    // If no more data to load
    if (newData.length === 0) {
      setHasMore(false);
      return;
    }

    setData(prev => [...prev, ...items]);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    fetchMoreData(); // Initial fetch
  }, []);

  return (
    <div className="bg-black min-h-screen p-2">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-white">Loading more...</p>}
        endMessage={<p className="text-white text-center">No more articles</p>}
      >
        {data.map((item) => (
          <div
            className="border border-white rounded-xl p-4 m-2 space-y-4"
            key={item._id}
          >
            <p className="text-white text-xl">{item.headline?.main}</p>
            <p className="text-white">{item.abstract}</p>
            <p className="text-white">{item.lead_paragraph}</p>
            <p className="text-gray-500">{item.byline?.original}</p>
            {/* <img src={`${item.multimedia[0].url}`} alt="" /> */}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;