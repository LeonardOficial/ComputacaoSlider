import React from "react";

const AI = {
  title: "Inteligência artificial",
  body: (
    <div class="modal-sec">
      <div class="overflow">
        <h2>Sophia</h2>
        <img src="./imgs/AI-image-1.jpg" />
        <h2>Nano</h2>
        <img src="./imgs/AI-image-2.jpg" />
        <h2>Valerie</h2>
        <img src="./imgs/AI-image-3.jpg" />
      </div>
    </div>
  )
}

const Algorithm = {
  title: "Algoritmos",
  body: (
  <div class="modal-sec">
    <h2 class="overflow">
      <p>Início</p>
      <p>Verifica se o interruptor está desligado;</p>
      <p>Procura uma lâmpada nova;</p>
      <p>Pega uma escada;</p>
      <p>Leva a escada até o local;</p>
      <p>Posiciona a escada;</p>
      <p>Sobe os degraus;</p>
      <p>Para na altura apropriada;</p>
      <p>Retira a lâmpada queimada;</p>
      <p>Coloca a lâmpada nova;</p>
      <p>Desce da escada;</p>
      <p>Aciona o interruptor;</p>
      <p>Se a lâmpada não acender, então:</p>
      <p>Retira a lâmpada queimada;</p>
      <p>Coloca outra lâmpada nova</p>
      <p>Senão</p>
      <p>Tarefa terminada;</p>
      <p>Joga a lâmpada queimada no lixo;</p>
      <p>Guarda a escada;</p>
      <p>Fim</p>
    </h2>
  </div>
  )
}

const BigData = {
  title: "Big Data",
  body: (
  <div class="modal-sec">
    <img src="./imgs/bigdata-image-1.jpg" />
    <h4 style={{ paddingTop: "12px" }}>
    “Tudo se resume a análises de dados”.
     sentenciou Brian Stevens, vice-presidente de plataforma em nuvem da provedora. 
     “As empresas precisam entender 
     melhor seus usuários. O que eles querem? Do que gostam?
     Uma vez que uma empresa sabe isso, pode construir melhores estratégias”, 
     apontou, sinalizando que essa abordagem representa uma virada de jogo.
    </h4>
    
  </div>
  )
}

const Encryption = {
  title: "Encriptação",
  body: (
  <div class="modal-sec">
    <h1 style={{texAlign: "center"}}>Whatsapp ativa encriptação de mensagens para todos os usuários.</h1>
    <img src="./imgs/encryption-image-1.jpg" />
  </div>
  )
}


const OqueE = (props) => {
  return(
    <div>
      <div class="row row-50">
        <div style={{ background: "#10A5A6", color: "#eee" }} class="square-text aside-50">
          <p>
          <strong>Ciência da computação</strong> é o estudo dos fundamentos teóricos 
          da <strong>informação</strong> e <strong>computação</strong>, junto com as técnicas práticas
          para a implementação e aplicação desses fundamentos
          </p>
        </div>
        <div style={{ background: "#10A5A6", textAlign: "center", paddingTop: "40px" }} class="aside-50">
          <img style={{ border: "2px solid #303030", boxShadow: "0px 2px 16px 2px black" }} src="./imgs/typing-1.gif" /> 
        </div>
      </div>
      <div style={{ background: "#10A5A6", textAlign: "center" }} class="full-row">
        <div style={{ marginLeft: "20%", marginTop: "-26%" }} class="square-list">
          <img class="center" src="./imgs/lamp-1.gif" />
          <ul>
            <li class="shake-rotate" onClick={props.modal.bind(null, AI)} >
              <img src="./imgs/AI-2.jpg" />
            </li>
            <li class="shake-rotate" onClick={props.modal.bind(null, Algorithm)}>
              <img src="./imgs/algorithm-2.jpg" />
            </li>
            <li class="shake-rotate" onClick={props.modal.bind(null, BigData)}>
              <img src="./imgs/bigdata-1.jpg" />
            </li>
            <li class="shake-rotate" onClick={props.modal.bind(null, Encryption)}>
              <img src="./imgs/encryption-2.jpg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



const obj = {
  title: <span>O que é <strong>Ciência da Computação</strong> </span>,
  body: OqueE,
  icon: "./imgs/lambda.png"
}

export default obj;





