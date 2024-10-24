import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#64AE47");
  

  // useEffect(() => {
  //   const fetchColors = async () => {
  //     const response = await fetch("https://www.thecolorapi.com/random");
  //     const data = await response.json();
  //     setColor(data.hex.value);
  //   }  
  //   fetchColors();
  // }, []);
  
setColor("#FF5733");
  return (
    <div className="App">
      <h1 className="text-xl text-center mt-10 font-serif font-bold text-green-700">Color Pallete Generator</h1>
      <div className="w-20 h-28 rounded-sm shadow-lg">
        <div className="bg-red-700"></div>
        <div className="" style={{backgroundColor: color}}></div>
        <div className="text-black">{color}</div>
      </div>
    </div>
  );
}

export default App;
