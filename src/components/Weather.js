import React, {useState, useEffect} from 'react';
import useAxios from "../hooks/useAxios";

export default function Weather() {
    let [lat, setLat] = useState('0.0');
    let [long, setLong] = useState('0.0');
    const API_KEY = 'fe577b382a8038af35c74879570e375e';

    function success(pos) {
        let coordinates = pos.coords;        
        setLat(coordinates.latitude);
        setLong(coordinates.longitude);
    }

    useEffect(() => {
        function getLocation() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success);
                // console.log('you are here: ' + lat, long);
            } else {
                // console.log('i cant find your location')
            }
        }
        getLocation();
    }, [lat, long]);
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`;

    const {data, loading, error} = useAxios(url);
    
    return (<>
        {data && !error && !loading && 
            <div className="weather-container">
                <p className="degrees">{Math.floor(data.current.temp)}&deg;</p>
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} alt="weather icon"/>
            </div>
        }
    </>)
}