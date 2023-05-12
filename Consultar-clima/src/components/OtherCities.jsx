import styled from '@emotion/styled'
import React from 'react'
import BackgroundCities from '../img/BackgroundCities.jpeg'
import NormalClouds from '../img/NormalClouds.png'
import IconLocation from '../img/IconoLocation.png'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0px auto;
`

const Title = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: 0px auto 15px auto;

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
    
`

const City = styled.div`
    display: flex;
    border-radius: 30px;
    width: 270px;
    height: 80px;
    background-image: url(${BackgroundCities});
    background-size: cover;
    border: 3px solid #337cfb;
    position: relative;

`

const Content = styled.div`
    display: flex;
    margin: auto auto auto 30%;
    gap: 30px;
    align-items: center;

    .cloud {
        position: absolute;
        left: -25px;
    }

    .location {
        display: flex;
        align-items: center;
        gap: 7px;
        color: white;
        font-weight: 700;
        font-size: 1.3rem;
        
    }

    .time {
        font-size: .8rem;
        font-weight: 600;
        color: #A8CAFC;
        margin-left: 15px;
    }

    .temp {
        font-size: 1.5rem;
        color: #FFE061;
        font-weight: 700;
    }

`


const OtherCities = () => {
  return (
    <Container>
        <Title>
            <span>Other Cities</span>
            <button>+</button>
        </Title>
        <Cities>
            <City>
                <Content>
                    <div className='cloud'>
                        <img src={NormalClouds} alt="" height={50} width={85} />
                    </div>
                    <div>
                        <div className='location'>
                            <img src={IconLocation} alt="" height={20} />
                            <span>Location</span>
                        </div>
                        <div className='time'>Mostly Cloudy</div>
                    </div>
                    <div><span className='temp'>21°</span></div>
                </Content>
            </City>
        </Cities>
    </Container>
  )
}

export default OtherCities