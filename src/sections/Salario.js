import React from "react";

class Salario extends React.Component {
  
  state = {
    index: 0,
    profs: [
      { name: "Administração de Redes", salario: "3.311,76" },
      { name: "Web Development", salario: "3.524,02" },
      { name: "Segurança da Informação", salario: "4.897,17" },
      { name: "Sistemas (Projetos/Desenvolvimento/Consultoria)", salario: "5.235,57" },
      { name: "Arquitetura da Informação", salario: "5.818,35" },
      { name: "Engenheiro de Software", salario: "9.000,00" },
      { name: "Engenheiro de Big Data",  salario: "15.000,00" }
    ]
  }
  
  up = (e) => {
    if(this.state.index < this.state.profs.length) {
      this.setState({index: ++this.state.index});
    }
  } 
  
  render() {
    var prof = this.state.profs[this.state.index];
    
    return(
      <div style={{ background: "#FDFB5A" }}>
        <div style={{ padding: "18px", textAlign: "center" }} class="aside-50 square-text">
          <h2>
          Depende muito da área em que esse profissional decide se especializar. 
          A Ciência da Computação é uma disciplina muito abrangente.
          Você pode decidir se especializar em áreas bem diferentes como imagens, 
          sons, algoritmos, otimização ou sistemas distribuídos. 
          Até existe uma intersecção entre os ramos da computação, mas cada área escolhida tem muitas particularidades.
          </h2>
        </div>
        <div style={{ float: "right", textAlign: "center" }} class="aside-50 square-text">
          <span class="tag">{ prof.name }</span>
          <span class="tag">R${ prof.salario }</span>
          <img onClick={this.up} class="shake-hard" style={{ marginTop: "60px" }} src="./imgs/pig-1.png" />
        </div>
      </div>
    );
  }
   
}



export default {
  icon: "./imgs/salario.png",
  title: <span>Remuneração <strong>$$$</strong> </span>,
  body: Salario
}






