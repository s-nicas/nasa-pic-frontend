import React, {Component} from 'react'
import { Button, Modal } from 'react-bootstrap';

class PictureInfo extends Component {

  render() {

    return (
      <div>

        {this.props.photo.explanation}
        copyright: {this.props.photo.copyright}
      </div>
    );
  }
}

export default PictureInfo
