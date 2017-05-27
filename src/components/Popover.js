import React, { Component } from "react";
import { Popover, PopoverTitle, PopoverContent } from "reactstrap";


export default class Pop extends Component {
 
  render() {
    return(
      <Popover 
        placement={this.props.data.place} 
        isOpen={this.props.isOpen}
        target={this.props.data.target}
        toggle={this.props.close}>
        <PopoverTitle>
          { this.props.data.title }
        </PopoverTitle>
        <PopoverContent>
          { this.props.data.body }
        </PopoverContent>
      </Popover>
    );
  }
}





