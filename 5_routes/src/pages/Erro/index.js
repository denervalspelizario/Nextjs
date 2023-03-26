
import  { Link} from 'react-router-dom'


export default function Erro(){

  return(
    <div>

      <h1>Hmm, esta pagina não existe</h1><br />
      <Link to='/'>Home</Link><br />
      <Link to='/Contato'>Sobre</Link>
      

    </div>
  )
}
