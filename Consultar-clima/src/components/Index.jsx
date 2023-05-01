import React from 'react'
import WeatherLogo from '../img/WeatherLogo.png'
import styled from '@emotion/styled'
import IndexStyle from '../Styles/Index.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

`
const SectionLogo = styled.section`
  display: flex;
  height: 350px;

  @media (max-width: 400px) {
    margin-top: 3rem;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  width: 50%;
  margin: auto;

  @media (min-width: 500px) {
    height: 250px;
    width: 250px;
  }
`

const Titulo = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 800;
  margin: auto;
  text-transform: uppercase;
`

const SubTitulo = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
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
const Frase = styled.span`
  color: #ffffffbd;
  font-size: 0.7rem;
  text-align: center;
  margin: 1rem auto;
  padding: 0rem 2rem;
`

const Start = styled.button`
  padding: 1.1rem 3rem;
  font-size: 1.1rem;
  font-weight: 800;
  background-color: #FFE061;
  border-radius: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  box-shadow: #fff;
  border: none;
  box-shadow: rgba(0, 4, 255, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover{
    background-color: #e8cb55;
    cursor: pointer;
  }
`

const Index = ({setPronosticar, animar, setAnimar}) => {

  const handlePronosticar = ()=>{ 
    setTimeout(() => {
      setPronosticar(true)
    }, 100);
  }

  return (
    <Container className={`bg ${animar ? 'animar' : ''}`}>
      <SectionLogo>
        <Logo src={WeatherLogo} alt="" />
      </SectionLogo>
      <Section>
        <Titulo>Pronostico</Titulo>
        <SubTitulo>Del <span>Clima</span></SubTitulo>
      </Section>
      <Frase>Descubre el clima de tu localidad y de cualquier rincón del mundo con solo unos clics en nuestra página</Frase>
      <Start onClick={handlePronosticar}>Obtener Pronostico</Start>
    </Container>
  )
}

export default Index