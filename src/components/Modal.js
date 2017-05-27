import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export default class Question extends Component {

  render() {
    
    return(
      <Modal static isOpen={this.props.isOpen} toggle={this.props.close} class="full-post pl-alert" >
      
        <ModalHeader>
          { this.props.data.title }
        </ModalHeader>
        
        <ModalBody>
          { this.props.data.body }
        </ModalBody>
        
        <ModalFooter>
          <Button color="primary" toggle={this.props.close} >close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}






