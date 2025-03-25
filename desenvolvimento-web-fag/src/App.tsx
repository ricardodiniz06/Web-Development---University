import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { CepViewProps } from './components/cepView'

function App() {
  const [cep, setCep] = useState('')
  const [data, setData] = useState<CepViewProps>()
  

  function handleClick(){
    axios.get(`https://viacep.com.br/ws/${cep.replace('.', ''). replace('-', '')}/json/`)
  }

  return (
    <div style={{display: 'flex', gap:'20'}}>
    <input value= {cep}
    placeholder='digite seu cep'
    onChange={(element) => setCep(element.target.value)}> </input>
    <button onClick={handleClick}> Buscar Cep</button>
    </div>
  )
}

export default App
