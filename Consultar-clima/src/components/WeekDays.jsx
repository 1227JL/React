import styled from '@emotion/styled'
import React from 'react'
import BackgroundHome from '../img/BackgroundHome.jpg'
import BackgroundWeekDays from '../img/BackgroundWeekDays.jpg'
import ArrowRight from '../img/ArrowRight.png'
import Thunder from '../img/Thunder.png'
import WaterIcon from '../img/WaterIcon.png'
import TempIcon from '../img/Sombrilla.png'
import AireIcon from '../img/AireIcon.png'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundHome});
    position: absolute;
    z-index: 100;
`
const Header = styled.div`
    background-image: url(${BackgroundWeekDays});
    background-size: cover;
    height: 290px;
    width: 100%;
    border-bottom-right-radius: 22px 22px;
    border-bottom-left-radius: 22px 22px;
`

const Content = styled.div`
 display: flex;
 flex-direction: column;
`
const Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 20px auto;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;

    img {
        cursor: pointer;
    }

    .menu {
        display: flex;
        transform: rotate(-90deg);
        cursor: pointer;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 280px;
    background-color: white;
    margin: 20px auto;
    border-radius: 30px;
    box-shadow: rgba(19, 131, 200, 0.336) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    .content-1{
        display: flex;
        margin: 36px auto;
        gap: 20px;
    }

    .tomorrow {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .tomorrow .day {
        font-size: 1.1rem;
        color: #B3BECE;
        font-weight: 600;
    }

    .tomorrow span {
        color: #2F3A8F;
    }

    .fromTo {
        display: flex;
        position: relative;

    }
    
    .from {
        font-size: 3rem;
        color: #3559C6;
        font-weight: 700;
    }
    
    .to {
        position: absolute;
        left: 40%;
        top: 50%;
        font-size: 2rem;
        color: #3559C6;
        font-weight: 700;
        float: right;
    }

    .content-1 .thunder img{
        margin-left: -20px;
    }

    .content-1 div{
        display: flex;
        flex-direction: column;
    }

    .icon {
        width: 21px;
        height: 21px;
        object-fit: cover;
        display: block;

    }

    .content-2 {
        display: flex;
        justify-content: space-around;
    }

    .content-2 div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content-2 .data {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2F3A8F;
    }

    .content-2 .name {
        color: #80B1FB;
    }
`

const WeekDays = ({setWeekDays, dataWeekDays}) => {

    const CloseWeekDays = ()=>{
        setWeekDays(false)
    }

  return (
    <Container>
        <Header>
            <Content>
                <Text>
                    <img src={ArrowRight} alt="" height={20} onClick={CloseWeekDays} />
                    <span>Pronósticos de 7 días</span>
                    <div className='menu'>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </Text>
                <Info>
                    <div className='content-1'>
                        <div className='thunder'>
                            <img src={Thunder} alt="" height={110} />
                        </div>
                        <div className='tomorrow'>
                            <span className='day'>Mañana</span>
                            <div className='fromTo'>
                                <span className='from'>{dataWeekDays[1].temperature_max}°</span>
                                <span className='to'>/{dataWeekDays[1].temperature_min}°</span>
                            </div>
                            <span>{dataWeekDays[1].text}</span>
                        </div>
                    </div>
                    <div className='content-2'>
                        <div>
                            <img className='icon' src={TempIcon} alt="" />
                            <span className='data'>{dataWeekDays[1].wind}</span>
                            <span className='name'>Viento</span>
                        </div>
                        <div>
                            <img className='icon' src={WaterIcon} alt="" />
                            <span className='data'>{dataWeekDays[1].humidity}</span>
                            <span className='name'>Humedad</span>
                        </div>
                        <div>
                            <img className='icon' src={AireIcon} alt="" />
                            <span className='data'>{dataWeekDays[1].wind} km/h</span>
                            <span className='name'>Viento</span>
                        </div>
                    </div>
                </Info>
            </Content>
        </Header>
    </Container>
  )
}

export default WeekDays