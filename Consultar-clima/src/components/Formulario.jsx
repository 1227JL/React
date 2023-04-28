import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import AnimationWeather from './AnimationWeather'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  font-size: 1rem;
  width: 300px;
  padding: 20px;
  margin: auto;
  gap: 10px;
`

const Contenedor = styled.div`
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
  background-color: #5186db;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: #4776c2;
    cursor: pointer;
  }
`

function Formulario({lugar, setLugar}) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const [countrySelect, setCountrySelect] = useState('')
  const [stateSelect, setStateSelect] = useState('');
  const [citySelect, setCitySelect] = useState('');
  
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
    console.log("Enviando...");
    setLugar({ country: countrySelect, state: stateSelect, city: citySelect });
  }

  return (
    <>
    <AnimationWeather/>
    <Form onSubmit={handleSubmit}>
      <Contenedor>
        <label htmlFor="country">País</label>
        <select id="country" value={countrySelect} onChange={handleCountryChange}>
          <option value="">Seleccionar</option>
          {countries.map(country => (
            <option key={country.country_name} value={country.country_name}>{country.country_name}</option>
          ))}
        </select>
      </Contenedor>

      <Contenedor>
        <label htmlFor="state">Estado</label>
        <select id="state" onChange={handleStateChange}>
          <option value="">Seleccionar</option>
          {states.map(state => (
            <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
          ))}
        </select>
      </Contenedor>
      
      <Contenedor>
        <label htmlFor="city">Ciudad</label>
        <select id="city" value={citySelect} onChange={handleCityChange} >
          <option value="">Seleccionar</option>
          {cities.map(city => (
            <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
            ))}
          {cities.length == 0 && <option>{stateSelect}</option>}
        </select>
      </Contenedor>
      <Enviar type="submit" value='Enviar Ciudad' />
    </Form>
    </>
  );
}

export default Formulario;