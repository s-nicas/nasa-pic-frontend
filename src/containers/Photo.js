import React, {Component} from 'react'

class Photo extends Component {

  render(){
    return (

      <div>
       {this.props.title}
       <img src={this.props.url} alt={this.props.title}/>
      </div>
    )
  }
}
export default Photo
