import React, { Component } from "react";
import { Button } from "reactstrap";

import Modal from "../components/Modal";
import Popover from "../components/Popover";

export default class Slider extends Component {
  
  state = { 
    modalIsOpen: false,
    modalData: {},
    popoverIsOpen: false,
    popoverData: {},
    index: 0
  }
  
  setIndex = (i) => {
    this.setState({index: i});
  }
  
  openModal = (data) => {
    this.setState({modalData: data, modalIsOpen: true});
  } 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  
   openPopover = (data) => {
    this.setState({popoverData: data, popoverIsOpen: true});
  }
  closePopover = () => {
    this.setState({popoverIsOpen: false});
  }
  
  next = () => {
    if(this.state.index < this.props.sections.length-1) {
      this.setIndex(++this.state.index);
    }
  }
  prev = () => {
    if(this.state.index > 0) {
      this.setIndex(--this.state.index);
    }
  }

  render() {
    const section = this.props.sections[this.state.index];
    const title = section.title;
    const Body = section.body;
    const icon = section.icon;
    const tags = [];
    
    for(var i=0, l=this.props.sections.length; i<l; i++) {
      var style = {};
      if(l > 5) {
        style = { width: 100/l + "%" };
      }
      tags.push(<li key={i.toString()} class={this.state.index == i ? "active" : ""} style={style} >default { 1+i }</li>);
    }
    
    return(
      <div class="slider-holder">
        <Modal isOpen={this.state.modalIsOpen} data={this.state.modalData} close={this.closeModal} />
        <Popover isOpen={this.state.popoverIsOpen } data={this.state.popoverData} close={this.closePopover} />
        <div class="header">
          <img class="header-icon" src={ icon } />
          { title }
        </div> 
        <div class="slider">
          <Body modal={this.openModal} popover={this.openPopover} />
        </div>
        <Button class="prev" onClick={this.prev}>&lt;</Button>
        <Button class="next" onClick={this.next}>&gt;</Button>
        <ul class="footer">
          { tags }
        </ul>
      </div>
    );
  }
}







