import React, { useEffect, useState } from "react";
import './covid.css';
const Covid = () => {
    const [data, setData] = useState([]);
    const date = new Date().toLocaleString();
        const getCovidData = async () => {
            try {
                const res = await fetch('https://data.covid19india.org/data.json');
                const resJson = await res.json();
                setData(resJson.statewise[0]);
                console.log(data);
           } catch (error) {
                console.log(error);
           }
        }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="heading1">
                <h1 className="liveZ">🔴 Live</h1>
            </div>
            <div className="heading1">
                <h3>Covid19 Record</h3>
            </div>
            <div className="container">
            <div className="main">
              <div className="card">
                <div className="card_main1" ><div><h4><small>our </small>COUNTRY</h4><h1>INDIA</h1></div></div>
                <div className="card_main2"><div><h4><small>TOTAL </small>RECOVERD</h4><h1>{data.recovered}</h1></div></div>
                <div className="card_main3"><div><h4><small>TOTAL </small>CONFIRMED</h4><h1>{data.confirmed}</h1></div></div>
     
                <div className="card_main4"><div><h4><small>TOTAL </small>DEATH</h4><h1>{data.deaths}</h1></div></div>
                <div className="card_main5"><div><h4><small>TOTAL </small>ACTIVE</h4><h1>{data.active}</h1></div></div>
                <div className="card_main6"><div><h4><small>LAST </small>UPDATED</h4><h1>{date}</h1></div></div>
              </div>   
                </div>
            </div>  
        </>
);
}

export default Covid;