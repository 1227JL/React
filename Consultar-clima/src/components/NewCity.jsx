import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import axios from 'axios';
import { citiesPopular } from '../data/citiesPopular';


const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;

  .sub-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    height: 420px;

    @media (max-width: 415px) {
      margin: 10rem 10px;
    }
  }
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  color: white;
  
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  font-size: 1rem;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  gap: 10px;

  @media (max-width: 415px) {
    box-shadow:none;
    font-size: 1.3rem;
    gap: 30px;
    height: 100%;
    margin: auto;

    select{
      font-size: 1.2rem;
    }
    input[type='submit']{
      font-size: 1.1rem;
      padding: 15px;
    }
  }
`

const ContenedorSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    text-transform: uppercase;
    font-weight: 700;
  }

  select {
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
`
const Enviar = styled.input`
  background-color: #FFE061;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 15px;

  &:hover {
    background-color: #e8cb55;
    cursor: pointer;
  }
`
const NewCity = ({setNewCity, city, setCity}) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [authToken, setAuthToken] = useState('');
    const [countrySelect, setCountrySelect] = useState('')
    const [stateSelect, setStateSelect] = useState('');
    const [citySelect, setCitySelect] = useState('');
    const [error, setError] = useState(false)
  
    useEffect(() => {
      axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: {
          'Accept': 'application/json',
          'api-token': 'OMY3eDfDxiEjL5JkSg6i-OSQp1IOY2rPHecGv3CUsnrbXyaRRqBGbSM2EPmwGmb3FtA',
          'user-email': 'julianlopezsena1227@gmail.com'
        }
      })
      .then(response => {
        const auth_token = response.data.auth_token;
        setAuthToken(auth_token);
        axios.get('https://www.universal-tutorial.com/api/countries/', {
          headers: {
            'Authorization': 'Bearer ' + auth_token,
            'Accept': 'application/json'
          }
        })
        .then(response => {
          setCountries(response.data);
    
        })
        .catch(error => {
          console.log('Error al obtener países: ', error);
        });
      })
      .catch(error => {
        console.log('Error al obtener token de autenticación: ', error);
      });
    }, []);
  
    const handleCountryChange = (event) => {
      const country = event.target.value;
      setCountrySelect(country)
  
  
      axios.get('https://www.universal-tutorial.com/api/states/' + country, {
        headers: {
          'Authorization': 'Bearer ' + authToken,
          'Accept': 'application/json'
        }
      })
      .then(response => {
        setStates(response.data);
  
  
      })
      .catch(error => {
        console.log('Error al obtener estados: ', error);
      });
  
      setCountrySelect(country)
    };
  
    const handleStateChange = (event) => {
      const state = event.target.value;
      setStateSelect(state)
  
      axios.get('https://www.universal-tutorial.com/api/cities/' + state, {
        headers: {
          'Authorization': 'Bearer ' + authToken,
          'Accept': 'application/json'
        }
      })
      .then(response => {
        setCities(response.data);
  
  
      })
      .catch(error => {
        console.log('Error al obtener ciudades: ', error);
      });
    };
  
    const handleCityChange = (event)=>{
      const city = event.target.value;
      setCitySelect(city)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      if([citySelect].includes('')){
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000);
        return
      }
      setCity({ country: countrySelect, state: stateSelect, city: citySelect });
      citiesPopular.push(city);
      console.log("Ciudades", citiesPopular, city);
      setNewCity(false)
    }
    

  return (
    <Contenedor className='bg'>
      <div className='sub-container'>
        <Title><h1>Elige una Ubicación</h1></Title>
        <Form onSubmit={handleSubmit}>
          {error && <Error>Todos los campos son obligatorios</Error>}
          <ContenedorSelect>
            <label htmlFor="country" className='pais'>País</label>
            <select id="country" value={countrySelect} onChange={handleCountryChange}>
              <option value="">Seleccionar</option>
              {countries.map(country => (
                <option key={country.country_name} value={country.country_name}>{country.country_name}</option>
              ))}
            </select>
          </ContenedorSelect>

          <ContenedorSelect>
            <label htmlFor="state">Estado</label>
            <select id="state" onChange={handleStateChange}>
              <option value="">Seleccionar</option>
              {states.map(state => (
                <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
              ))}
            </select>
          </ContenedorSelect>
          
          <ContenedorSelect>
            <label htmlFor="city">Ciudad</label>
            <select id="city" value={citySelect} onChange={handleCityChange} >
              <option value="">Seleccionar</option>
              {cities.map(city => (
                <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                ))}
              {cities.length == 0 && <option>{stateSelect}</option>}
            </select>
          </ContenedorSelect>
          <Enviar type="submit" value='Enviar Ubicación' />
        </Form>
      </div>
    </Contenedor>
  )
}

export default NewCity