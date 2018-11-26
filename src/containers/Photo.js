import React, {Component} from 'react'

class Photo extends Component {
// how to render info upon click

  mediaType = (props) =>{
    if(props.mediaType === "video"){
      return (
        <iframe className="Home-Pic" width="540" height="500"
          src={props.url} title={this.props.title}>
        </iframe>
      )
    } else {
    return (<img className="Home-Pic" src={this.props.url} alt={this.props.title} width="auto"/>)
    }
  }

// TODO not sure how to have button / page render only if a photo is available
  render(){
    return (
      <div >
         <h3>{this.props.title}</h3>
         {this.mediaType(this.props)}
      </div>
    )
  }
}
export default Photo
