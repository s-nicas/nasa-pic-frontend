import React from 'react'
import Photo from './Photo'

const Photos = props => {
  if ( props.photoInfo ){
    const renderPhoto = (<Photo key={1} mediaType={props.photoInfo.media_type} url={props.photoInfo.url} explanation={props.photoInfo.explanation} title={props.photoInfo.title}/>)

    return (
      <div>
        {renderPhoto}
      </div>
    );
  }

}

export default Photos
