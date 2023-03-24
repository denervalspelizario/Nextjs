
import { useState, useEffect } from "react"


export default function App(){

const [tarefas, setTarefas] = useState([
  'pagar conta de luz', 'estudar nestjs'
]) // como é uma array com varios objetos mas se inicia vazia tem que etr o []
const [input, setInput] = useState('')


useEffect(()=> {

  const tarefasStorage = localStorage.getItem('@tarefa') // pega o item @tarefa(que guarda as tarefas) e repassa para tarefasStorage 

  if(tarefasStorage){ // se tarefasStorage se tiver dados( existir dados salvos em @tarefa) então ..
    
    setTarefas(JSON.parse(tarefasStorage)) // altera de string para objeto(@tarefa vem como string ver linha 27) e repassa a aray para state tarefas 
  }

}, [])// se esta vazia é um componente didMount ou seja carrega o app ele inicia


useEffect(() => {

  localStorage.setItem('@tarefa', JSON.stringify(tarefas)) // vai ser salvo no @tarefas todos os dados de tarefas
                                                           // como nao da pra salvar no localStorage uma array precissa transformar em string
                                                           // é isso que o JSON.stringfy faz   



}, [tarefas]) // se contem alguma state e só ativa a funcao quano a state for alterada


function cadastrar(e){
  e.preventDefault() // o preventdefault é usado para evitar que ao clicar no btn a pagina atualize automaticamente 
  
  setTarefas([...tarefas, input]) // state tarefa vai receber os objetos que ja estiverem em tarefa(pelo spread operator) MAIS oque for digitado no input
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




