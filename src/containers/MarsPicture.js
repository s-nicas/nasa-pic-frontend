import React, {Component} from 'react'

class MarsPicture extends Component {

  render(){
    return(
    <div>
     <img className="Mar-Picture" src={this.props.image} alt=' mars' width="auto"/>

    </div>
  )
  }
}
export default MarsPicture
//
