import styled from '@emotion/styled'
import style from '../Styles/Home.css'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
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
// import { element } from 'prop-types'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: url(${BackgroundHome});
`

const Reset = styled.button`
background-color: transparent;
align-self: flex-end;
border: none;
position: absolute;
font-size: 1.1rem;
margin: 2rem 2rem ;
font-weight: 700;
color: #80B1FB;
cursor: pointer;
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
    font-size: 0.9rem;
    font-weight: 900;
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
    margin: 1.5rem auto 1rem 6rem;
    border-radius: 1.6rem;
    border: 4px solid #5a8acd;
    color: #f7f7f7;
    font-size:11rem;
    font-weight:700;
    background-image: url(${BackgroundGrades});

    @media (max-width: 400px ) {
        height: 232px;
        width: 70%;
        margin: 1.5rem auto 1rem auto;

    }
    
    span{
        display: flex;
        justify-content: center;
        margin-top: -13px;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 2rem;
        text-shadow: #337cfb 0px 24px 38px, #005eff 0px 20px 12px;
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
            margin-top: 85px;
            left: 2.15rem;
        
    }
`

const Datos = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    width: 88%;
    height: 110px;
    background-color: white;
    border-radius: 1.9rem;
    position: relative;
    box-shadow: rgba(19, 131, 200, 0.336) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

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
`

const WeatherDay = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1.5rem auto;
` 
const Text = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    
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
        img{
            margin-top: 2px;
        }
    }


`
const HoursWeather = styled.div`
    display: flex;
    justify-content: space-around;
    max-width:370px;
    margin: 1.1rem auto;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px;
        padding: 0px 10px;
        gap: 0.4rem;
        border-radius: 25px;
        background-image: url(${BackgroundHours});
        background-size: cover;
        color: white;
        font-weight: 600;
        margin-left: 4px;
    
    }
    div:first-child{
        margin-left: 0px;
    }
`

const Home = ({lugar, setCargando}) => {

    const resetData = ()=>{
        localStorage.removeItem('lugar')
    }    

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
        const fetchData = async () => {
        try {
            setCargando(true)
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
            const openWeatherResponse = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=89fde7a7310ef43c5b093fb42ca3f336`);
    
            const [timeZoneData, tutiempoData, openWeatherData] = await Promise.all([timeZoneResponse, tutiempoResponse, openWeatherResponse]).then(responses => Promise.all(responses.map(response => response.json())));
    
            console.log('timeZone', timeZoneData);
            console.log('tutiempo', tutiempoData);
            console.log('openWeather', openWeatherData);
            setDataWeather({humidity: openWeatherData.current.humidity, temp: openWeatherData.current.temp, pressure: openWeatherData.current.pressure, wind_speed: openWeatherData.current.wind_speed});
            setFecha(timeZoneData.formatted)
            setHoursDay(tutiempoData.hour_hour)
            const hoursOfDay = Object.values(tutiempoData.hour_hour).filter(hour => hour.date === Object.values(tutiempoData.hour_hour)[0].date);
            setHoursDay(hoursOfDay);
            console.log(hoursOfDay);
            setCargando(false)
        }
    } catch (error) {
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

  return (
    <Container>
       <Header>
      <Reset onClick={resetData}>Reset</Reset>
            <Location>
                <img src={IconLocation} alt="" height={30} />
                <h1>{city}</h1>
            </Location>
            <DateLocation>{capitalizeFirstLetter(formatearFecha(fecha))}</DateLocation>
       </Header>
        <Temperatura>
            <span>{parseInt(dataWeather.temp -273.15)}<p>°</p></span>
            <img src={WeatherIcon} alt="" height={130} width={155} />
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
                    <span className='data'>{dataWeather.wind_speed}</span>
                    <span>Viento</span>
                </div>
            </div>
        </Datos>

        <WeatherDay>
            <Text>
                <span>Today</span>
                <button>7-Pronósticos del día <img src={Arrow} alt="" height={14} /></button>
            </Text>
            <HoursWeather className='carousel' onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop}> 
                {/* <Slider {...settings}>  */}
                    {hoursDay.map((hour, index) => (
                        <div key={index}>
                            <span>{hour.hour_data}</span>
                            <img src={ThunderWeather} alt='' height={25}></img>
                            <span>{hour.temperature}°</span>
                        </div>
                    ))}
                {/* </Slider> */}
            </HoursWeather>
        </WeatherDay>
    </Container>
  )
}

export default Home