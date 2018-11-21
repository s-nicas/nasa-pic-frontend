import React, {Component} from 'react'
import Info from './Info'
import { Button } from 'reactstrap';

class Photo extends Component {

  mediaType = (props) =>{
    if(props.mediaType === "video"){
      return (
        <iframe width="560" height="400"
          src={props.url} title={this.props.title}>
        </iframe>
      )
    } else {
    return (<img className="center" src={this.props.url} alt={this.props.title} />)
    }
  }

  render(){
    return (
      <div>
         {this.props.title}
         {this.mediaType(this.props)}
      </div>
    )
  }
}
export default Photo
