import styled from '@emotion/styled'
import React from 'react'
import BackgroundHome from '../img/BackgroundHome.jpg'
import BackgroundWeekDays from '../img/BackgroundWeekDays.jpg'

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
    height: 230px;
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
    width: 90%;
    margin: 10px auto;
    color: white;
`

const WeekDays = () => {
  return (
    <Container>
        <Header>
            <Content>
                <Text>
                    <span>z</span>
                    <span>Pronósticos de 7 días</span>
                    <span>:</span>
                </Text>
            </Content>
        </Header>
    </Container>
  )
}

export default WeekDays