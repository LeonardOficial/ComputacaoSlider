//import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import Slider from "./slider/Slider";

import OqueE from "./sections/OqueE";		
import OQueEstuda from "./sections/OQueEstuda";
import OndeAtua from "./sections/OndeAtua";
import Salario from "./sections/Salario";
import Final from "./sections/Final";

import "./styles/styles";

const sections = [
  OqueE,
  OQueEstuda,
  OndeAtua,
  Salario,
  Final
  
];

render(
  <Slider sections={sections} />
  ,
document.getElementById("root")
);



