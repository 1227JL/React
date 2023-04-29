import React from 'react'
import WeatherLogo from '../img/WeatherLogo.png'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const SectionLogo = styled.section`
  display: flex;
  height: 500px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  width: 50%;
  margin: auto;
  `

const Titulo = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 800;
  margin: auto;
  text-transform: uppercase;
`

const SubTitulo = styled.h1`
  color: #fff;
  font-size: 2em;
  font-weight: 800;
  margin: auto;
  text-transform: uppercase;

  span {
    color: #FFE061;
    font-size: 3rem;
  }
`

const Start = styled.button`
  padding: 1.1rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  background-color: #FFE061;
  border-radius: 2rem;
  margin: auto;
  margin-top: 6rem;
  box-shadow: #fff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

const Index = () => {
  return (
    <Container>
      <SectionLogo>
        <Logo src={WeatherLogo} alt="" />
      </SectionLogo>
      <Section>
        <Titulo>Pronostico</Titulo>
        <SubTitulo>Del <span>Clima</span></SubTitulo>
      </Section>
      <Start>Obtener Pronostico</Start>
    </Container>
  )
}

export default Index