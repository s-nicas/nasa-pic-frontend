import React, {Component} from 'react'

export default class Photo extends Component {

  mediaType = ( props ) => {
    if( props.mediaType === "video" ){
      return (
        <iframe className="home-Pic" width="540px" height="500px"
          src={ props.url } title={ this.props.title }>
        </iframe>
      )
    } else {
      return (
        <img className="home-Pic" src={ this.props.url } alt={ this.props.title } title={ this.props.title } />
      )
    }
  }

  render() {
    return (
      <div>
         <h3> { this.props.title } </h3>
         { this.mediaType(this.props) }
      </div>
    )
  }
}
