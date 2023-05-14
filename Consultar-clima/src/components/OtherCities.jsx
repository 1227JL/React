import React, { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import BackgroundCities from '../img/BackgroundCities.jpeg'
import NormalClouds from '../img/NormalClouds.png'
import IconLocation from '../img/IconoLocation.png'
import NewCity from './NewCity'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px auto;
    @media (min-width: 400px) {
        margin: 0px auto;
    }
`

const Title = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: 0px auto 15px auto;

    @media (min-width: 600px) {
        width: 90%;
    }

    span{
        color: #2F3A8F;
        font-weight: 700;
    }

    button{
        cursor: pointer;
        right: 10px;
        top: -11px;
        position: absolute;
        font-size: 2rem;
        background-color: transparent;
        outline: none;
        border: none;
        color: #80B1FB;
    }
    
`

const Cities = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    gap: 2rem;
    max-width: 320px;
    padding: 0 25px;

    @media (min-width: 700px) {
        max-width: 880px;
    }

`

const City = styled.div`
    display: flex;
    border-radius: 30px;
    width: 300px;
    padding: 0px 80px 0px 20px;
    height: 70px;
    background-image: url(${BackgroundCities});
    background-size: cover;
    border: 3px solid #337cfb;
    position: relative;
    margin-bottom: 10px;

    @media (max-width: 400px) {
        height: 80px;
    }

`

const Content = styled.div`
    display: flex;
    margin: auto auto auto 30%;
    gap: 30px;
    align-items: center;

    .cloud {
        position: absolute;
        left: -15px;
    }

    .location {
        display: flex;
        align-items: center;
        gap: 7px;
        color: white;
        font-weight: 700;
        font-size: 1.3rem;
        margin-left: 15px;
    }

    .time {
        max-width: 100px;
        font-size: .8rem;
        font-weight: 600;
        color: #A8CAFC;
        margin-left: 35px;
    }

    .temp {
        font-size: 1.5rem;
        color: #FFE061;
        font-weight: 700;
    }

`
const OtherCities = () => {
    const [newCity, setNewCity] = useState(false)
    const [citiesAdds, setCitiesAdds] = useState([])
    const [city, setCity] = useState({})

    const addNewCity = ()=>{
        setNewCity(true)
    }

    const [tempCities, setTempCities] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (Object.keys(city).length > 0) {
              const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city.city},${city.country}&key=8753cace746a4fc0b5eb41572e4ece19`);
              const data = await response.json();
              const cityAdd = { name: city.city, lat: data.results[0].geometry.lat, long: data.results[0].geometry.lng };
              setCitiesAdds((prevCities) => [...prevCities, cityAdd]);
              setNewCity(false);
      
              const openWeatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityAdd.lat}&lon=${cityAdd.long}&exclude=hourly,daily&appid=f200acf7d44619cca8cb67a2ace4d158`);
              const openWeatherData = await openWeatherResponse.json();
              setTempCities((prevTempCities) => [...prevTempCities, openWeatherData]);
            }
            // ...
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
    }, [city]);

    useEffect(() => {
        const cityNames = citiesAdds.map((city) => city.name);
        setNames(cityNames);
    }, [citiesAdds]);

    const carousel2 = document.querySelector('.carousel2');

    let isDragStart2 = false;
    let prevPageX2 = 0;
    let prevScrollLeft2 = 0;
    
    const dragStart2 = (e) => {
      isDragStart2 = true;
      prevPageX2 = e.pageX;
      prevScrollLeft2 = carousel2.scrollLeft;
    };
    
    const dragging2 = (e) => {
      if (!isDragStart2) return;
      e.preventDefault();
      const positionDiff2 = e.pageX - prevPageX2;
      carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    };
    
    const dragStop2 = () => {
      isDragStart2 = false;
    };
  return (
    <Container>
        <Title>
            <span>Other Cities</span>
            <button onClick={addNewCity}>+</button>
        </Title>
        <Cities className='carousel2'  onMouseDown={dragStart2} onMouseMove={dragging2} onMouseUp={dragStop2}>
        {tempCities.length > 0 && tempCities.map((city, index) => {
            return (
                <City key={index}>
                <Content>
                    <div className="cloud">
                    <img src={NormalClouds} alt="" height={50} width={85} />
                    </div>
                    <div>
                    <div className="location">
                        <img src={IconLocation} alt="" height={20} />
                        <span>{names[index]}</span>
                    </div>
                    <div className="time">{city.current.weather[0].description}</div>
                    </div>
                    <span className="temp">{parseInt(city.current.temp - 273.15)}°</span>
                </Content>
                </City>
            );
        })}
        </Cities>
        {newCity && <NewCity setNewCity={setNewCity} city={city} setCity={setCity}/>}
    </Container>
  )
}

export default OtherCities