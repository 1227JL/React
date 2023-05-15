import styled from '@emotion/styled'
import style from '../Styles/Home.css'
import BackgroundHome from '../img/BackgroundHome.jpg'
import BackgroundGrades from '../img/BackgroundTemperatura.jpg'
import IconLocation from '../img/IconoLocation.png'
import WeatherIcon from '../img/WeatherIcon.png'
import WaterIcon from '../img/WaterIcon.png'
import TempIcon from '../img/Sombrilla.png'
import AireIcon from '../img/AireIcon.png'
import BackgroundHours from '../img/BackgroundHoursWeather.jpeg'
import Arrow from '../img/arrow.png'
import ThunderWeather from '../img/ThunderWeather.png'
import { useState, useEffect } from 'react'
import WeekDays from './WeekDays'
import Menu from './Menu'
import OtherCities from './OtherCities'

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
    .menu {
        display: flex;
        transform: rotate(-90deg);
        position: absolute;
        cursor: pointer;
        color: #80B1FB;
        font-weight: 600;
        font-size: 1.4rem;
        right: 20px;
        top: 10px;
    }
`

const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 1rem 1.7rem 1rem 1.7rem;
    color: #1F65C9;
    font-size: 0.9rem;
    font-weight: 900;

    @media (max-width: 450px) {
        padding: 1.7rem 1.7rem 1.7rem 1.7rem;
    }

    @media (min-width: 450px) {
        padding: 1rem 1.7rem 1rem 1.7rem;
    }
`
const DateLocation = styled.span`
    font-size: 1.1rem;
    color: #80B1FB;
    text-align: center;
    margin-top: -10px;
`
const Temperatura = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto;
    border-radius: 1.6rem;
    border: 4px solid #337cfb;
    background-image: url(${BackgroundGrades});
    position: relative;
    height: 220px;
    width: 330px;
    @media (min-width: 400px) {
        padding-bottom: 0px;
    }
    
    span:first-of-type{
        text-align: center;
        color: #f7f7f7;
        font-size:11rem;
        font-weight:700;
        display: flex;
        justify-content: center;
        margin-top: -13px;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 2rem;
        text-shadow: #337cfb 0px 24px 38px, #005eff 0px 20px 12px;
    }
    
    .pronostico {
        position: absolute;
        font-size: 1.2rem;
        color: #94BDFB;
        font-weight:700;
        bottom: 10px;
        right: -10px;
        max-width: 210px;

    }

    span p{
        margin-top: -1.3rem;
        margin-right: 0;
        right: 0.3rem;
        font-size: 9rem;
        position: relative;
    }
    
    img {
        position: absolute;
        z-index: 10;
        bottom: -10px;
        left: -33px;
    }
    
    @media (min-width: 400px ) {
        height: 232px;
        margin: .5rem auto 1rem auto;
    }

`

const Datos = styled.div`
    display: flex;
    margin: 0px auto;
    justify-content: space-around;
    align-items: center;
    width: 88%;
    height: 110px;
    background-color: white;
    border-radius: 1.9rem;
    position: relative;
    box-shadow: rgba(19, 131, 200, 0.336) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    transition: width .25s ease-in-out;

    

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        img{
            width: 21px;
            height: 21px;
            object-fit: cover;
            display: block;
        }
        
        span{
            color: #80B1FB;
        }

        .data {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2F3A8F;
        }
    }


    @media (max-width:400px){
        margin: 10px auto;
    }
    @media (min-width:470px){
        width: 60%;
        padding: 10px 0px;
    }

    @media (min-width:800px){
        width: 60%;
    }

    @media (min-width:900px){
        width: 55%;
    }
    
    @media (min-width:1200px){
        width: 55%;
    }
`

const WeatherDay = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 1rem auto 0rem auto;
` 
const Text = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto auto 10px auto;

    @media (min-width: 750px) {
        width: 60%;
        margin: auto auto 10px auto;
    }
    
    span{
        color: #2F3A8F;
        font-weight: 700;
    }
    
    button {
        font-weight: 700;
        color: #80B1FB;
        border: none;
        background-color: transparent;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        cursor: pointer;

        img{
            margin-top: 2px;
        }
    }
`

const HoursWeather = styled.div`
    display: flex;
    justify-self: center;
    max-width:365px;
    margin: 1.1rem auto 0rem auto;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    align-items: center;

    @media (max-width: 450px) {
        max-width:340px;
    }

    @media (min-width: 400px) {
        margin: .0rem auto;
    }

    @media (min-width: 750px) {
        max-width:690px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110px;
        min-width: 65px;
        gap: 0.4rem;
        border-radius: 25px;
        background-image: url(${BackgroundHours});
        background-size: cover;
        color: white;
        font-weight: 600;
        margin-left: 4px;
    }
    div:first-of-type{
        margin-left: 0px;
    }
`

const Home = ({setPronosticar, lugar, setCargando, weekDays, setWeekDays}) => {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    
    const {country, state, city} = lugar
    const [fecha, setFecha] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [currentTime, setCurrentTime] = useState("");
    const [dataWeather, setDataWeather] = useState({})
    const [hoursDay, setHoursDay] = useState([])
    const [dataWeekDays, setDataWeekDays] = useState([])
    
    function formatearFecha(fecha) {
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      
        // Analizar la cadena de fecha y hora en un objeto Date
        const fechaObj = new Date(fecha);
      
        // Extraer los componentes de la fecha y hora
        const diaSemana = diasSemana[fechaObj.getDay()];
        const diaMes = fechaObj.getDate();
        const mes = meses[fechaObj.getMonth()];
        const hora = fechaObj.getHours().toString().padStart(2, "0") + ":" + fechaObj.getUTCMinutes().toString().padStart(2, "0");
      
        // Devolver la fecha formateada
        return `${diaSemana}, ${diaMes} de ${mes}, ${fechaObj.getUTCFullYear()}, ${hora}`;
    }

    useEffect(() => {
        setCargando(true)
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
    }, []);

    const fetchData = async () => {
        try {
          if (lat && long) {
            const timeZoneResponse = fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=MLZF9VDS6IBQ&format=json&by=position&lat=${lat}&lng=${long}`);
            const tutiempoResponse = fetch(`https://api.tutiempo.net/json/?lan=es&apid=q5Ea4azqaqzgrbW&ll=${lat},${long}`);
            const openWeatherResponse = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=4907c56f8a9c6de8ccf6ddf7f4c9169d`);
    
            const [timeZoneData, tutiempoData, openWeatherData] = await Promise.all([timeZoneResponse, tutiempoResponse, openWeatherResponse]).then(responses => Promise.all(responses.map(response => response.json())));
    
            console.log('timeZone', timeZoneData);
            console.log('tutiempo', tutiempoData);
            console.log('openWeather', openWeatherData);
            setDataWeather({humidity: openWeatherData.current.humidity, temp: openWeatherData.current.temp, pressure: openWeatherData.current.pressure, wind_speed: openWeatherData.current.wind_speed});
            const weekDaysData = Object.entries(tutiempoData).filter(([key, value]) => key.includes('day')).map(([key, value]) => value);
            setDataWeekDays(weekDaysData)
            console.log('WeekDays', weekDaysData);
            setFecha(timeZoneData.formatted)
            setHoursDay(tutiempoData.hour_hour)
            const hoursOfDay = Object.values(tutiempoData.hour_hour).filter(hour => hour.date === Object.values(tutiempoData.hour_hour)[0].date);
            const newData = hoursOfDay.map((element) => {
                if (element.text.includes('nuboso')) {
                  element.text = element.text.replace('nuboso', 'nubloso');
                }
                return element;
            });
            setHoursDay(newData);
            console.log(hoursOfDay);
            setCargando(false)
        }
    } catch (error) {
        console.log('error');
        console.error(error);
        }
    
    };
      
    useEffect(() => {
        fetchData();
    }, [lat, long]);


    const carousel = document.querySelector('.carousel')

    let isDragStart = false, prevPageX, prevScrollLeft;

    const dragStart = (e)=>{
        isDragStart = true
        prevPageX = e.pageX
        prevScrollLeft = carousel.scrollLeft
    }

    const dragging = (e)=>{
        if(!isDragStart) return;
        e.preventDefault()
        let positionDiff= e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft-positionDiff;
    }

    const dragStop = ()=>{
        isDragStart = false
    }

    const handleOpenWeekDays = ()=>{
        setWeekDays(true)
    }

    // console.log('data', dataWeekDays[0].text);

  return (
    <>
        <Container>
        <Header>
            <Menu setPronosticar={setPronosticar}/>
            <Location>
                <img src={IconLocation} alt="" height={30} />
                <h1>{city}</h1>
            </Location>
            <DateLocation>{capitalizeFirstLetter(formatearFecha(fecha))}</DateLocation>
        </Header>
            <Temperatura>
                <span>{parseInt(dataWeather.temp - 273.15)}<p>°</p></span>
                <img src={WeatherIcon} alt="" height={130} width={155} />
                <span className='pronostico'>{Object.keys(hoursDay).length > 0 ? hoursDay[0].text : ''}</span>
            </Temperatura>
            <Datos>
                <div>
                    <div>
                        <img src={WaterIcon} alt=""/>
                        <span className='data'>{dataWeather.humidity}</span>
                        <span>Humedad</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={TempIcon} alt="" />
                        <span className='data'>{dataWeather.pressure}</span>
                        <span>Presion</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={AireIcon} alt="" />
                        <span className='data'>{dataWeather.wind_speed} km/h</span>
                        <span>Viento</span>
                    </div>
                </div>
            </Datos>

            <WeatherDay>
                <Text>
                    <span>Today</span>
                    <button onClick={handleOpenWeekDays}>Pronósticos de 7 días <img src={Arrow} alt="" height={14} /></button>
                </Text>
                <HoursWeather className='carousel' onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop}> 
                    {hoursDay.map((hour, index) => (
                        <div key={index}>
                            <span>{hour.hour_data}</span>
                            <img src={ThunderWeather} alt='' height={25}></img>
                            <span>{hour.temperature}°</span>
                        </div>
                    ))}
                </HoursWeather>
            </WeatherDay>
            <OtherCities/>
        </Container>
        {weekDays && <WeekDays setWeekDays={setWeekDays} dataWeekDays={dataWeekDays}/> }
    </>
  )
}

export default Home