import './App.css';
import React from 'react'

let coracao = (
  <svg width="179" height="196" viewBox="0 0 179 196" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M89.5 174.358L78.6854 163.578C40.275 125.44 14.9167 100.205 14.9167 69.4167C14.9167 44.1817 32.9658 24.5 55.9375 24.5C68.915 24.5 81.3704 31.115 89.5 41.4867C97.6296 31.115 110.085 24.5 123.062 24.5C146.034 24.5 164.083 44.1817 164.083 69.4167C164.083 100.205 138.725 125.44 100.315 163.578L89.5 174.358Z" fill="url(#paint0_linear_1_15)"/>
  <defs>
  <linearGradient id="paint0_linear_1_15" x1="89.5" y1="24.5" x2="89.5" y2="174.358" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF0A0A"/>
  <stop offset="1" stop-color="#9C0B85"/>
  </linearGradient>
  </defs>
  </svg>

)
let esquerda = (<svg width="165" height="119" viewBox="0 0 165 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.944 36.7908L74.4562 59.5L105.944 82.2588L96.25 89.25L55 59.5L96.25 29.75L105.944 36.7908Z" fill="#FF0000"/>
</svg>
)
let direita = (
  <svg width="165" height="119" viewBox="0 0 165 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.0563 82.2092L90.5438 59.5L59.0563 36.7412L68.75 29.75L110 59.5L68.75 89.25L59.0563 82.2092Z" fill="#FF0000"/>
</svg>

)

function App() {
  let [qual , setQual] = React.useState(0)
  let main;
  switch (qual){
    case 0:
      main = <First/>
      break;
    case 1:
      main = <Second/>
      break;
    case 2:
      main = <Terceiro/>
      break;
    case 3:
      main = <Quarto/>
      break;
    default:
      main = <First/>
      break;
  }
  function First(){
    return (
      <main>
        <h1>Parabens para Nós</h1>
        <button onClick={()=>{setQual(1)}} className="App"> 
            {coracao}
            <h2>Click Aqui !</h2>
        </button>
        {/* <div>Escolha um tema :</div>
        <div>
          <button onClick={()=>{
            document.querySelector('*').style.backgroundColor = 'white';
            document.querySelector('main').style.color = 'black'
          }} Style="border: 1px solid rgba(0, 0, 0, 1)" className='Claro'>Claro</button>
          <button onClick={()=>{
            document.querySelector('main').style.backgroundColor = 'black';
            document.querySelector('main').style.backgroundColor = 'white';
          }} Style='background: rgba(0, 0, 0, 1);color:white;'className='Escuro'>Escuro</button>
        </div> */}
      </main>
  );
  }
  function Second(){
    return(
      <main>
        <h1 className='t2'>Assista !</h1>
        <div Style='border: 4px solid;border-image-source: linear-gradient(180deg, #FF0000 0%, #FAFE00 100%);border-image-slice: 1;'>
          <iframe width="300" height="515" src="https://www.youtube.com/embed/QmBgP10SK4I" title="Pequena homenagem " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <button onClick={()=>{setQual(0)}} Style="background:transparent;border:0px;">{esquerda}</button>
          <button onClick={()=>{setQual(2)}} Style='background:transparent;border:0px;'>{direita}</button>
        </div>
      </main>
    )
  }
  function Terceiro(){
    return(
      <main>
        <h1 Style='color:rgba(255, 0, 0, 1)' className='t3'>Para meu amor !</h1>
        <p Style='width:90%;font-size:1.5em'>Por 1 ano Debinha foi o contato numero 1 dos meus contatos, a companhia das minhas companhias
          a pessoa que eu me deito e acordo todos os dias e hoje dia 11 de Setembro de 2022 nós temos a oportunidade de celebrar 4 desde que
          nos firmamos nosso compromisso e 1 ano que eu fui agraciado com a benção de conviver 24 horas por dia contigo.
          Tenho muitos agradecimentos a fazer e muitas coisas bonitas a serem ditas, mas infelizmente não tenho tantas linhas
          Vivemos, aprendemos e conhecemos muitas coisas juntos. Tivemos nosso momentos ruins mas que você sempre esteve la comigo
          Sei que ainda iremos viver 
          bastante coisa, que ainda teremos muitos obstáculos e que haveremos de ter muito história pra contar , mas até aqui agradeço por ter sido você a mulher que escolhi pra viver nesse mundão.  Que nós nunca possamos soltar a mão um do outro.
          Aqui deixo o meu muito Obrigado!</p>
        <div>
          <button onClick={()=>{setQual(1)}} Style="background:transparent;border:0px;">{esquerda}</button>
          <button onClick={()=>{setQual(3)}} Style='background:transparent;border:0px;'>{direita}</button>
        </div>
      </main>
    )
  }

  function Quarto(){
    return(
      <main>
        <h1 Style='color:rgba(255, 0, 0, 1)' className='t3'>Vamos !</h1>
          <p Style='width:90%;font-size:1.5em'>
            Agora em fim nós teremos o nosso merecido dia de lazer.
          </p>
        <div Style='display:flex;margin-left:-2em'>
          <button onClick={()=>{setQual(2)}} Style="background:transparent;border:0px;">{esquerda}</button>
          <a href='https://goo.gl/maps/iSsCK5VjVVSpijQz8'>
            <svg fill="Red" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="150px" height="150px"><path d="M 14.5 20 C 14.222656 20 14 20.222656 14 20.5 L 14 29.5 C 14 29.777344 14.222656 30 14.5 30 L 21 30 C 22.207031 30 24 29.199219 24 27 C 24 25.722656 23.390625 24.929688 22.652344 24.480469 C 22.863281 24.078125 23 23.59375 23 23 C 23 20.800781 21.207031 20 20 20 Z M 28.5 20 C 28.222656 20 28 20.222656 28 20.5 L 28 29.5 C 28 29.777344 28.222656 30 28.5 30 L 35.886719 30 C 35.996094 30 36.101563 29.9375 36.152344 29.832031 L 36.988281 28.140625 C 37.023438 28.078125 36.976563 28 36.902344 28 L 30 28 L 30 26.5 C 30 26.222656 30.222656 26 30.5 26 L 33.875 26 C 33.988281 26 34.089844 25.9375 34.140625 25.832031 L 34.988281 24.144531 C 35.023438 24.078125 34.972656 24 34.902344 24 L 30 24 L 30 22 L 35.859375 22 C 35.96875 22 36.070313 21.9375 36.125 21.839844 L 36.988281 20.144531 C 37.023438 20.078125 36.976563 20 36.902344 20 Z M 40.496094 20 C 40.21875 20 40 20.222656 40 20.5 L 40 29.699219 C 40 29.863281 40.136719 30 40.300781 30 L 42 30 L 42 28 C 42 27.449219 42.449219 27 43 27 L 45.984375 27 L 47.683594 29.847656 C 47.738281 29.941406 47.835938 30 47.941406 30 L 49.902344 30 C 49.976563 30 50.023438 29.917969 49.984375 29.847656 L 48.105469 26.660156 C 49.285156 26.140625 50 25.019531 50 23.5 C 50 21.375 48.625 20 46.5 20 Z M 0.300781 20.074219 C 0.136719 20.074219 0 20.210938 0 20.375 L 0 26 C 0 27.511719 1.046875 30.375 5 30.375 C 8.953125 30.375 10 27.511719 10 26 L 10 20.074219 L 8.300781 20.074219 C 8.136719 20.074219 8 20.210938 8 20.375 L 8 25.988281 C 7.992188 26.386719 7.8125 28.375 5 28.375 C 2.1875 28.375 2.007813 26.390625 2 26 L 2 20.074219 Z M 16 22 L 19.988281 22 C 20.449219 22.011719 21 22.195313 21 23 C 21 23.746094 20.527344 23.957031 20.101563 23.996094 C 20.046875 23.996094 20.023438 23.996094 19.988281 24 L 16 24 Z M 42 22 L 46.5 22 C 47.84375 22 48 22.855469 48 23.5 C 48 24.144531 47.84375 25 46.5 25 L 42 25 Z M 16.5 26 L 20.988281 26 C 21.449219 26.011719 22 26.195313 22 27 C 22 27.804688 21.449219 27.988281 20.988281 28 L 16 28 L 16 26.5 C 16 26.222656 16.222656 26 16.5 26 Z"/></svg>
          </a>
        </div>
     </main>
    )
  }


  return(
    <div>
      {main}
    </div>
  )
}

export default App;
