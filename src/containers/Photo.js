import React, {Component} from 'react'
import Info from './Info'
import { Button } from 'reactstrap';

class Photo extends Component {
// how to render info upon click
  handleOnClick = () =>{
    return <Info key={1} explanation={this.props.explanation}/>
  }

  mediaType = (props) =>{
    if(props.mediaType === "video"){
      return (
        <iframe className="center"width="600" height="400"
          src={props.url} title={this.props.title}>
        </iframe>
      )
    } else {
    return (<img className="center" src={this.props.url} alt={this.props.title} />)
    }
  }

// TODO not sure how to have button / page render only if a photo is available
  render(){
    return (
      <div>
         {this.props.title}
         {this.mediaType(this.props)}
         <Button outline color="primary" onClick={this.handleOnClick}>primary</Button>
      </div>
    )
  }
}
export default Photo
