import { useEffect } from "react"

function App() {

  useEffect(()=>{
    const apiCall = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=${import.meta.env.VITE_KEY}`)
      console.log(response)
    }
    apiCall()
  },[])

  return (
    <>
      <div className="bg-black h-screen">
        <p className="text-white">hello</p>
      </div>
    </>
  )
}

export default App
