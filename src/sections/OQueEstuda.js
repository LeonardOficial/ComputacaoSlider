import React from "react";

const Tempo = {
  place: "top",
  title: "Tempo do bacharelado",
  target: "time-000",
  body: <span>Duração média: <strong>4 anos</strong> .</span>
}

const Grade = {
  place: "top",
  title: "Grade curricular",
  target: "grade-000",
  body: (
  <span>
    O curso exige facilidade para raciocínios abstratos
    e para envolvimento com verdadeiras maratonas de cálculos. 
    As disciplinas básicas incluem <strong>matemática</strong>, eletricidade e 
    <strong> fundamentos da computação</strong>. Fique preparado para atuar com 
    atividades que buscam o aprimoramento da capacidade de expressão,
    particularmente no <strong>domínio do idioma inglês</strong>. <strong>Linguagens de programação, 
    sistemas de hardware e software, banco de dados, redes, robótica e
    computação gráfica</strong> também fazem parte do currículo. A maioria dos cursos
    inclui na grade curricular disciplinas de <strong>administração</strong> e <strong>empreendedorismo</strong>.
    Na conclusão exige-se uma monografa.
  </span>)
}

const Investimento = {
  place: "top",
  title: "Investimento mensal",
  target: "investimento-000",
  body: (
    <span>
      <p>Pontifícia Universidade Católica do Rio de Janeiro (Puc-Rio) <strong>R$ 3.223,00</strong> </p>
      <p>Universidade Veiga de Almeida (UVA) <strong>R$ 757,00 (Noite)  R$ 848,00 (Manhã)</strong> </p>
      <p>Centro Universitário Serra dos Órgãos (Unifeso) <strong>R$ 1.474,91</strong> </p>
      <p>Centro Universitário Carioca (UNICARIOCA) <strong>R$ 578,31 (Manhã) R$ 624,71 (Noite)</strong> </p>
    </span>
  )
}

const OQueEstuda = ({modal, popover}) => {
  return(
    <div>
      <div class="row">
        <img class="aside-50" src="./imgs/study-1.gif" />
        <div style={{ background: "#DB4F40", color: "#fff" }} class="aside-50 square-text">
          <p>
          Em geral, graus de Ciência da Computação visam enfatizar 
          os fundamentos matemáticos e teóricos da computação, 
          ao invés de ensinar tecnologias específicas que podem rapidamente 
          se tornar obsoletas.
          </p>
          <ul style={{ borderRight: "none" }}  class="inline-list">
            <li id="time-000" onClick={popover.bind(null, Tempo)}>
              <img src="./imgs/time-2.gif" />
              tempo
            </li>
            <li id="grade-000" onClick={popover.bind(null, Grade)}>
              <img src="./imgs/grade-1.jpg" />
              grade
            </li>
            <li id="investimento-000" onClick={popover.bind(null, Investimento)}>
              <img src="./imgs/money-1.png" />
              investimento
            </li>
            <li>
              <img src="./imgs/facts-1.gif" />
              fatos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



export default {
  icon: "./imgs/study-icon.png",
  title: <span>O que estuda o <strong>BCC</strong> ?</span>,
  body: OQueEstuda
};






