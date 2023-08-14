import './Header.css'
import styled from 'styled-components'

const HeaderElement = styled.header`
  background-color: black;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h1`
  color: white;
  font-size: 65px;
  font-weight: bold;
`

export const Header  = () => {
  return(
    <HeaderElement>
      <img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="Logo da dio" style={{width: "150px"}} />
      <Titulo>BANK</Titulo>
    </HeaderElement>
  )
}
