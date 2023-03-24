
import { useState } from "react"


export default function App(){

const [tarefas, setTarefa] = useState([
  'pagar conta de luz', 'estudar nestjs'
]) // como é uma array com varios objetos mas se inicia vazia tem que etr o []
const [input, setInput] = useState('')


function cadastrar(e){
  e.preventDefault() // o preventdefault é usado para evitar que ao clicar no btn a pagina atualize automaticamente 
  
  setTarefa([...tarefas, input]) // state tarefa vai receber os objetos que ja estiverem em tarefa(pelo spread operator) MAIS oque for digitado no input
                                 // ou seja ele pega os dados que ja tem no state tarefas e adiciona junto o que tem no state input 
  
  setInput('')                  

  
}

  return(
    <div>

      <h1>Cadasro de usuario</h1>
        <form onSubmit={cadastrar}>
          <label>
            Digite seu nome
          </label><br/>
            <input  placeholder="Digite uma tarefa"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
            
            /><br/>
            

            <button type="submit">
              Registrar
            </button>
        </form>

        <br/><br/>
        <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>
            {tarefa}
            </li>
        ))}
        </ul>


    </div>
  )
}




