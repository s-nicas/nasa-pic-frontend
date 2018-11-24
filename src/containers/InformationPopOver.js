import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

export default class InformationPopOver extends React.Component {

    state = {
      popoverOpen: false,
    };

  toggle = () =>{
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Read About Image 
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>{this.props.photo.title}</PopoverHeader>
          <PopoverBody>
            {this.props.photo.explanation}
          </PopoverBody>
          <p><b>Copyright </b> {this.props.photo.copyright}</p>
        </Popover>
      </div>
    );
  }
}
