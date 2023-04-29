import styled from '@emotion/styled'
import { useState, useEffect } from 'react';


const Texto = styled.span`
    font-weight: 900;
    color: #ef0505;
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
`

const Error = ({children}) => {

  return (
    <Texto>{children}</Texto>
  )
}

export default Error