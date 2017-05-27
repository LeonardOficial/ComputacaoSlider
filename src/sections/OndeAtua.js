import React from "react";

const OndeAtua = () => {
  return(
    <div class="ondeAtua">
     
      <div style={{ background: "#8179E2", color: "#fff" }} class="row square-text">
        <p style={{ textAlign: "left" }} >
        <img style={{ float: "right", marginRight: "-18px", width: "40%" }} src="./imgs/computer-1.gif" />
        Cria ferramentas da informática, dos softwares mais básicos, como os usados 
        para controle de estoques, até os mais complexos sistemas de <strong>processamento de informações</strong>. Também dá assistência 
        aos usuários, manutenção a redes de computadores e a conexões com a internet. Pode, ainda, implantar e gerenciar bancos 
        de dados e instalar sistemas de segurança para as operações de compra e venda pela rede.
        </p>
      </div>
      <div class="row">
        <ul class="inline-list">
          <li style={{ borderLeft: "none" }} >ciência</li>
          <li>empresas</li>
          <li style={{ borderRight: "none" }} >free lancer</li>
        </ul>
        <img class="aside-3" src="./imgs/science.gif" />
        <img class="aside-3" src="./imgs/office.jpg" />
        <img class="aside-3" src="./imgs/home-office.gif" />
      </div>
    </div>
  );
}



export default {
  icon: "./imgs/lambda.png",
  title: <span>Onde atua o <strong>BCC</strong> ?</span>,
  body: OndeAtua
}






