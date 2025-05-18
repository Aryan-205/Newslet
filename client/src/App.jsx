import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    const apiCall = async () => {
      const response = await fetch(`http://localhost:3000/`)
      const resData = await response.json() 
      resData
        .then(()=>setData(resData))
      console.log(data)
    }
    apiCall()
  },[])

  return (
    <>
      <div className="bg-black h-screen">
        {/* <p className="text-white">{data[0].headline.main}</p> */}
      </div>
    </>
  )
}

export default App
