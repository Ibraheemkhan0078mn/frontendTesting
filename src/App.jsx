import React from 'react'
import axios from 'axios'

const App = () => {




  async function handleClick() {
    console.log(import.meta.env.VITE_REACT_BACKEND_BASE_URL)
    let response = await axios.get(import.meta.env.VITE_REACT_BACKEND_BASE_URL + "/v1/check")
    if (response?.data) {
      console.log(response.data)
      alert(response.data)
    } else {
      alert("Somethings is creating error")
    }
  }



  return (

    <div>
      The frontend is working well

      <button onClick={() => { handleClick() }}>Get Data</button>
    </div>
  )
}

export default App