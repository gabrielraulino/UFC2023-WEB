import { useState } from "react"

const alunos = [
  {
    nome : "Sicrano" , notas : {ap1: 8.4, ap2: 5.4},
    nome : "Beltrano" , notas : {ap1: 6.7, ap2: 3.5},
    nome : "Fulano" , notas : {ap1: 7.3, ap2: 9.2}
    
  }
]//vetor de objetos alunos

const Questao1A = () => {
  const [media, setMedia] = useState()
    const calcularMedia = (media) => {
      setMedia(media)
    }
    <QUestao1B alunos={alunos} media={media}/>
  }
  


function QUestao1B ({alunos, media}) {
  const calularMedia = () => { 
    for (let index = 0; index < alunos.length; index++) {
      media[index] = (alunos[0].ap1 + alunos[0].ap2)/2
    }
  }
}

export default {Questao1A, QUestao1B}