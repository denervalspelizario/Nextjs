import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: brown;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

`;

export const Titulo = styled.a`
  font-size: 64px;
  color: #FFF;
  

`;


export const BemVindo = styled.h1`
  font-size: ${props => `${props.tamanho}px`};
  color: ${props => `${props.cor}`};
`;





/*

.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
}
.header{
  width: 100%;
  height: 70px;
  background-color: brown;
  justify-content: center;
  align-items: center;
  display: flex;
}

.titulo{
  font-size: 35;
  color: #FFF;
}



*/