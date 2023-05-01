import styled from '@emotion/styled'
import style from '../Styles/Home.css'
import { formatearFecha } from '../helpers'
import BackgroundHome from '../img/BackgroundHome.jpg'
import BackgroundGrades from '../img/BackgroundTemperatura.jpg'
import IconLocation from '../img/IconoLocation.png'
import WeatherIcon from '../img/WeatherIcon.png'
import { useState, useEffect } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: url(${BackgroundHome});
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
`

const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 1.7rem;
    color: #1F65C9;
    font-size: 1rem;
    font-weight: 900;
`
const DateLocation = styled.span`
    font-size: 1rem;
    color: #80B1FB;
    text-align: center;
`
const Temperatura = styled.div`
    display: flex;
    flex-direction: column;
    height: 232px;
    width: 70%;
    margin: 2rem auto;
    border-radius: 1.6rem;
    border: 4px solid #5a8acd;
    color: #f7f7f7;
    font-size:10rem;
    font-weight:700;
    background-image: url(${BackgroundGrades});
    
    span{
        display: flex;
        margin-top: -13px;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 2.3rem;
        text-shadow: #337cfb 0px 24px 38px, #005eff 0px 20px 12px;
    }

    span p{
        margin-top: -4px;
        font-size: 7.5rem;
    }

    img {
        position: absolute;
        z-index: 10;
        margin-top: 85px;
        left: 2.15rem;
    }
`

const Datos = styled.div`
    display: flex;
    margin: 0 auto;
    width: 88%;
    height: 110px;
    background-color: white;
    border-radius: 1.9rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`

const Home = ({lugar}) => {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    const {country, state, city} = lugar
    const [fecha, setFecha] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [currentTime, setCurrentTime] = useState("");
    
    const formatearWeeKDay = (fecha)=>{
        const fechaNueva = new Date(fecha);
        const opciones = { weekday: 'long'};
        return fechaNueva.toLocaleDateString('es-ES', opciones);
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city},${country}&key=8753cace746a4fc0b5eb41572e4ece19`);
            const data = await response.json();
            console.log(data);
            setLat(data.results[0].geometry.lat);
            setLong(data.results[0].geometry.lng);
          } catch (error) {
            console.error(error);
          }

        };
      
        fetchData();
    }, [city]);
      
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (lat && long) {
              const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=MLZF9VDS6IBQ&format=json&by=position&lat=${lat}&lng=${long}`);
              const data = await response.json();
              console.log(data);
              setFecha(data.dst)
              setCurrentTime(data.formatted)
            }
          } catch (error) {
            console.error(error);
          }
          
        };
      
        fetchData();
    }, [lat, long]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.tutiempo.net/json/?lan=es&apid=q5Ea4azqaqzgrbW&ll=${lat},${long}`);
            const data = await response.json();
            console.log(data);
        };
      
        fetchData();
    }, [lat,long]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://api.tutiempo.net/json/?lan=es&apid=q5Ea4azqaqzgrbW&ll=${lat},${long}`);
    //         const data = await response.json();
    //         console.log(data);
    //     };
      
    //     fetchData();
    // }, [lat,long]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${long}&appid=20d0c64d08f914e581d4c160505117f7`);
            const data = await response.json();
            console.log('openWeather',data);
        };
      
        fetchData();
    }, [lat,long]);
    


  return (
    <Container>
       <Header>
            <Location>
                <img src={IconLocation} alt="" height={30} />
                <h1>{city}</h1>
            </Location>
            <DateLocation>{capitalizeFirstLetter(formatearWeeKDay(fecha))}{' '}{currentTime}</DateLocation>
       </Header>
        <Temperatura>
            <span>22 <p>°</p></span>
            <img src={WeatherIcon} alt="" height={130} width={155} />
        </Temperatura>
        <Datos>

        </Datos>
    </Container>
  )
}

export default Home