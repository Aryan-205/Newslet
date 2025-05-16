import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    const apiCall = async () => {
      const response = await fetch(`http://localhost:3000/`)
      const resData = response.json() 
      console.log(resData)
      resData?.then(()=>setData(resData))
    }
    apiCall()
  },[])

  return (
    <>
      <div className="bg-black h-screen">
        <p className="text-white">{data}</p>
      </div>
    </>
  )
}

export default App
