import React from "react";

class Final extends React.Component {
  
  render() {
    
    return(
      <div style={{ background: "#4DB6AD" }}>
        <div style={{ textAlign: "center" }} class="row full-row square-text">
          <h2 style={{ fontSize: "60px", padding: "34px", color: "#fff", width: "100%" }} >TEAM EXATAS GO!</h2>
          <img style={{ width: "100%" }} src="./imgs/cat.gif" />
          <div class="foo" style={{ width: "100%" }}>
          <h2 style={{ fontSize: "40px", padding: "34px", color: "#fff", width: "100%" }} >referências</h2>
          <p>http://www.moneyguru.com.br/meu-bolso/os-precos-de-15-cursos-de-ciencia-da-computacao-em-sp-e-no-rj-para-2015/ </p> 
          <p>http://guiadoestudante.abril.com.br/profissoes/ciencia-da-computacao/ </p> 
          <p>http://www.vagas.com.br/profissoes/carreiras/ciencia-da-computacao/a-carreira-na-ciencia-da-computacao/ </p> 
          <p>https://pt.m.wikipedia.org/wiki/Ciência_da_computação </p> 
          <p>https://pt.m.wikipedia.org/wiki/Encriptação </p> 
          <p>http://computerworld.com.br/google-posiciona-big-data-no-centro-de-sua-estrategia-de-cloud </p> 
          <p>http://m.oglobo.globo.com/sociedade/tecnologia/whatsapp-ativa-encriptacao-de-mensagens-para-todos-os-usuarios-19022469 </p> 
          <p>http://m.tecmundo.com.br/programacao/2082-o-que-e-algoritmo-.htm </p> 
          <p>http://exame.abril.com.br/carreira/os-15-cargos-com-melhores-salarios-na-area-de-ti/ </p> 
        </div>
        </div>
      </div>
    );
  }
   
}



export default {
  icon: "./imgs/salario.png",
  title: <span><strong>O produto</strong> </span>,
  body: Final
}






