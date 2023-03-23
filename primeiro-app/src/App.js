
import Nome from "./components/Nome"
import { useState } from "react"


export default function App({props}){

const [profissao, setProfissao] = useState('Desenvolvedor Web')

function alteraProfissao(nome){
  setProfissao(nome)
  alert('alterou a profissao')
}


  return(
    <div>
        <h1>Componente App</h1>
        <button 
          onClick={() => alteraProfissao('Desenvolvedor Mobile')}
          >
          clique aqui
        </button>
        <h2>{profissao}</h2>
        <br/>
        <Nome nome='Denerval' idade={30}/>
        <br/>
        <Nome nome='Tom' idade={36}/>
    </div>
  )
}


