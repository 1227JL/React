import styled from '@emotion/styled'
import React from 'react'
import Night from '../img/night.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(${Night});
    background-size: cover;
    color: white;
`

const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`

const City = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 0.1rem;
`

const Country = styled.h1`
    font-size: 1rem;
    margin-bottom: 4.2rem;
`

const Weather = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 17rem;
`

const Degrees = styled.span`
    font-size: 5.3rem;
    font-weight: 700;
    margin-left: 24px;
`

const Dates = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`

const Home = ({country, city}) => {
  return (
    <Container>
        <Location>            
            <City>{city}</City>
            <Country>{country}</Country>
        </Location>
        <Weather>
            <Degrees>27°<span className='centigrados'>C</span></Degrees>
        </Weather>
        <Dates>

        </Dates>
    </Container>
  )
}

export default Home