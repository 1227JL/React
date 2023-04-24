import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [criptos, setCriptos] = useState([])

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomonedas, SelectCriptos] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(()=>{
        const consultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=500&tsym=USD'
            
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            // console.log(resultado.Data);

            const arrayCriptos = resultado.Data.map(cripto => {
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos)
        }
        consultarApi();
    },[])

  return (
    <form action="">
        <SelectMonedas/>
        <SelectCriptos/>
        <InputSubmit
            type="submit" value='cotizar'
        />
    </form>
  )
}

export default Formulario