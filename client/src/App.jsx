import { useEffect, useState } from "react"

function App() {

  const [data,setData] = useState(null)

  useEffect(()=>{
    const apiCall = async () => {
      const response = await fetch(`http://localhost:3000/`)
      setData(response.json().copyright)
    }
    apiCall()
  },[])

  return (
    <>
      <div className="bg-black h-screen">
        <pre className="text-white">{data}</pre>
      </div>
    </>
  )
}

export default App
