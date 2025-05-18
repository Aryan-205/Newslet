import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(`http://localhost:3000/`);
        const resData = await response.json();

        setData(resData);

        console.log("Fetched data:", resData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    apiCall();
  }, []);

  return (
    <>
      <div className="bg-black h-screen flex flex-col p-2 gap-4">
        <div className="border border-white rounded-xl p-2 gap-4 grid">
          <p className="text-white text-xl">{data[0]?.headline.main || "Loading..."}</p>
          <p className="text-white">{data[0]?.abstract}</p>
          <p className="text-gray-500">{data[0]?.byline.original}</p>
          <img src={`${data[0]?.multimedia[3].legacy.thumbnail }`} alt="" />
        </div>
      
        { data.map((items)=>(
          <div className="bg-black h-screen flex flex-col p-2 gap-4" key={items._id}>
            <div className="border border-white rounded-xl p-2 gap-4 grid">
              <p className="text-white text-xl">{items?.headline.main || "Loading..."}</p>
              <p className="text-white">{items?.abstract}</p>
              <p className="text-gray-500">{items?.byline.original}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
