
import { useState } from "react"


export default function App(){

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [idade, setIdade] = useState('')


const [user, setUser] = useState({}) // como é um objeto que recebe varios dados no caso os dados do input deve conter o {}


function cadastrar(e){
  e.preventDefault() // o preventdefault é usado para evitar que ao clicar no btn a pagina atualize automaticamente 
  
  setUser({          // adicionando ao state user as states que sao os dados dos inputs
      nome: nome,
      email: email,
      idade:  idade
    })  

  
}






  return(
    <div>

      <h1>Cadasro de usuario</h1>
        <form onSubmit={cadastrar}>
          <label>
            Digite seu nome
          </label><br/>
            <input  placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
            
            /><br/>

            <label>
            Digite seu email
          </label><br/>
            <input  placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            
            /><br/>

            <label>
            Digite seu idade
          </label><br/>
            <input  placeholder="Digite seu idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
            
            />  <br/>

            <button type="submit">
              Registrar
            </button>
        </form>

        <br/><br/>
        <div>
          <span>Bem vindo: {user.nome}</span><br/>
          <span>idade: {user.idade}</span><br/>
          <span>email: {user.email}</span><br/>

        </div>


    </div>
  )
}


