import React, {Component} from 'react'

class Photo extends Component {

  mediaType = (props) =>{
    if(props.mediaType === "video"){
      return (<iframe width="420" height="315"
        src={props.url}>
      </iframe>)
    } else {
    return (<img src={this.props.url} alt={this.props.title}/>)
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
