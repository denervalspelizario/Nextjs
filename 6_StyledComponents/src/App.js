import React from "react"
import { Container, Header, Titulo, BemVindo } from "./styles"

// para instalar o styled components o comando é npm install --save styled-components


export default function App(){

  return(
    <Container>
      <Header>
        <Titulo> Styled Component </Titulo>
      </Header>
      <BemVindo cor='#00FF00' tamanho={100}> 
        Bem vindo ao Sistema
      </BemVindo>
    </Container>
  )
}


/*
    <div className="container">
    
      <header className="header">
        <h1 className="titulo">Styled Component</h1>
      </header>

    </div>
*/