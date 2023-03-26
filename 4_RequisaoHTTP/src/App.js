
import React,{useEffect, useState} from 'react'
import './styles.css'

// https://sujeitoprogramador.com/rn-api/?api=posts



export default function App(){


  const [nutri, setNutri] = useState([])

  useEffect(()=> {

    function carregandoAPI(){
      
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((resultado) => resultado.json()) // deu certo acessou a api tranforma ela em json
      .then((json) => { // json contem todos os dados da api
        
        setNutri(json) // jpga todos os dados que estão no json na state nutri

      })
    }

    carregandoAPI()

  },[])



  return(
    <div className='container'>
      <header>
        <h1 className='titulo'>React Nutri</h1>
      </header>

      {nutri.map((item) => {  // atravez da funcao map percorre todos os dados que estão que estao na nutri(lembrar que nutri recebeu dados da api) depois joga em item
                              // e atravez de item conseguimos acessar todos os dados     
        return(

          <article key={item.id} className='post'>
            <strong className='titulo'> {item.titulo} </strong>
            
            <img 
              src={item.capa} alt={item.titulo} className='capa'
            />

            <p className='subtitulo'>
              {item.subtitulo}
            </p>

            <h2>Categoria: {item.categoria}</h2>
            <a className='botao'> Acessar </a>


          </article>

        )


      })}
    
    </div>
  )
}


