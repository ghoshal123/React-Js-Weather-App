import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const City = ({ myCity, setCity, setData }) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=aca9f97f9e61cd0271d2390bfcf81511&units=metric`;
    const navigate = useNavigate();
    const [iserror, setIsError] = useState({ show: false, msg: '' });

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setIsError({
                show: true,
                msg: data.message,
            });
            if (myCity) {
                if (data) {
                    setData({
                        dt: data.dt,
                        name: data.name,
                        temp: data.main.temp,
                        icon: data.weather[0].icon,
                        description: data.weather[0].description,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        wind: data.wind.speed,
                        deg: data.wind.deg,
                        country: data.sys.country,
                        temp_min: data.main.temp_min,
                        temp_max: data.main.temp_max,
                    })
                    setCity("");
                    navigate("/wea");
                }
            }
            else {
              //  console.log("check2");
                alert("Please enter the city name");
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className=" justify-content-center" style={{ width: "600px", height: "650px", outline: "2px solid black", boxShadow: "inset -5px  -5px rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "20px", margin: "auto", marginTop: "50px", padding: "20px" }}>
                <form action="#" onSubmit={handleClick}>
                    <h1 className="text-center" style={{ color: "white" }}>My Weather Application</h1>
                    <div className="d-flex justify-content-center">
                        <img src="/images/cloud.gif" style={{ width: "300px" }} alt="" />
                    </div><br />
                    <div className="d-flex justify-content-center">
                        <h4 style={{ color: "white" }}>Search Your City Here</h4>
                    </div><br />
                    <div className="d-flex justify-content-center">

                        <input className="form-control" style={{ width: "50vh", outline: "2px solid black" }} type="search" onChange={(e) => setCity(e.target.value)} value={myCity} />
                    </div><br />

                    <div className="d-flex justify-content-center">
                        <h2 style={{ color: "yellow" }}>{iserror.show && iserror.msg.toLocaleUpperCase().concat("  !!!")}</h2>
                    </div><br />

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-light"><b>Search</b></button>
                    </div><br />
                </form>

            </div>

        </div>
    )
}

export default City