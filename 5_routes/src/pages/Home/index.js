import  { Link} from 'react-router-dom'

export default function Home(){

  return(
    <div>

      <h1>Bem vindo a pagina Home</h1><br />
      <Link to='/Sobre'>Sobre</Link><br />
      <Link to='/Contato'>Contato</Link>
      <Link to='/Produto'>Produto</Link>
    </div>
  )
}