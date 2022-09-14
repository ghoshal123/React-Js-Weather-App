import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import City from './components/City';
import Weather from './components/Weather';

import React,{useState}  from 'react'

function App() {

 const [myCity, setCity] = useState("");
 const [myData, setData] = useState({
      dt: 0,
      name: "",
      temp: 0,
      description: "",
      pressure: 0,
      humidity: 0,
      sunrise: 0,
      sunset:0,
      icon: "",
      country: "",
      wind: 0,
      deg:0,
      temp_min: 0,
      temp_max: 0,
      error:""
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<City myCity={myCity} setCity={setCity} setData={setData}/>} />
          <Route path="/wea" element={<Weather myData={myData} />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
