import React from 'react'
import { useNavigate } from 'react-router-dom';

const Weather = ({ myData }) => {

    const navigate = useNavigate();
    const sunrise = myData.sunrise;
    const sunset = myData.sunset;

    //TimeStamp Converter
    const TimeStampConv = (utcData) => {
        let myTime = new Date(utcData * 1000);
        let hr = myTime.getHours();
        hr = hr % 24;
        hr = hr ? hr : 24;
        let min = myTime.getMinutes();
        min = min < 10 ? '0' + min : min;
        let ampm = (hr <= 12 && hr <=24) ? 'am' : 'pm';
        let time = hr + ':' + min + ampm;
        return time;
    }

    // Date and Time
    let dt = new Date(myData.dt * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = dt.getFullYear();
    let month = months[dt.getMonth()];
    let date = dt.getDate();
    let hr1 = dt.getHours();
    let min1 = dt.getMinutes();
    let ampm1 = hr1 >= 12 ? 'pm' : 'am';
    hr1 = hr1 % 12;
    hr1 = hr1 ? hr1 : 12; // the hour '0' should be '12'
    min1 = min1 < 10 ? '0' + min1 : min1;
    let sec1 = dt.getSeconds();
    let time1 = date + ' ' + month + ' ' + year + ' ' + hr1 + ':' + min1 + ':' + sec1 + ' ' + ampm1;

    const myNavigate = () => {
        navigate("/");
    }

    return (
        <div>
            <div className=" justify-content-center" style={{ width: "800px", height: "950px", outline: "2px solid black", boxShadow: "inset -5px  -5px rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "20px", margin: "auto", marginTop: "50px", padding: "20px", marginBottom: "50px" }}>

                <div className=" justify-content-center">
                    <h1 style={{ color: "white", textAlign: "center" }}><img src="/images/loc.gif" style={{ width: "40px" }} alt="" />{myData.name},{myData.country}</h1>
                </div><br />
                <div className=" justify-content-center">
                    <h3 style={{ color: "white", textAlign: "center" }} ><img src="/images/temp.gif" style={{ width: "50px" }} alt="" />{myData.temp} &#8451; </h3>
                </div>
                <div className="justify-content-center">
                    <h4 style={{ color: "white", textAlign: "center" }}><img src={`http://openweathermap.org/img/wn/${myData.icon}@2x.png`} alt="" /> {myData.description.toUpperCase()}</h4>
                </div>
                <div className=" justify-content-center">
                    <h4 style={{ color: "white", textAlign: "center" }}><img src="/images/t1.gif" style={{ width: "50px" }} alt="" />{time1}</h4>
                </div>
                <div className=" justify-content-center">
                    <h3 style={{ color: "white", textAlign: "center" }}><img src="/images/e.gif" style={{ width: "50px" }} alt="" />Weather Details:</h3>
                </div><br />
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "right", marginRight: "30px" }}> <img src="/images/sunr.gif" style={{ width: "10vh" }} alt="" />Sunrise:{TimeStampConv(sunrise)}</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "left", marginLeft: "30px" }}><img src="/images/suns.gif" style={{ width: "10vh" }} alt="" /> Sunset:{TimeStampConv(sunset)}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "right", marginRight: "30px" }}><img src="/images/wave.gif" style={{ width: "10vh", margin: "auto" }} alt="" />Wind:{myData.wind} m/sec</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "left", marginLeft: "30px" }}><img src="/images/dir.gif" style={{ width: "10vh" }} alt="" />Wind Direction:{myData.deg} &deg;</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "right", marginRight: "30px" }}><img src="/images/hot.png" style={{ width: "10vh" }} alt="" />Max Temp:{myData.temp_max}&#8451;</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "left", marginLeft: "30px" }}><img src="/images/cool.png" style={{ width: "10vh" }} alt="" />Min Temp:{myData.temp_min} &#8451;</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "right", marginRight: "30px" }}><img src="/images/pre.png" style={{ width: "10vh" }} alt="" />Pressure:{myData.pressure} hPa</h5>
                        </div>
                        <div className="col-6">
                            <h5 style={{ color: "white", float: "left", marginLeft: "30px" }}><img src="/images/humid.png" style={{ width: "10vh" }} alt="" /> Humidity:{myData.humidity}%</h5>
                        </div>
                    </div><br /><br />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-light" onClick={myNavigate}><b>Back</b></button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Weather