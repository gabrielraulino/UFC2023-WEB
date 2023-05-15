import { useState } from "react"
const Pokemon = () => {
  const [estado, setEstado] = useState("/")

  const mudaPosicao = () =>{
    if(estado ==="/")
      setEstado("/back/")
    else 
      setEstado("/")
  }

  return(
    <div>
      <h1>Pokemon</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${estado}25.png`} alt="" style={{width : "400px"}}/>
      <button onClick={ () => mudaPosicao()}>Alternar</button>
    </div>
  )

}

export default Pokemon