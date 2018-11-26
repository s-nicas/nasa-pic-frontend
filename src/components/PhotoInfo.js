import React from 'react'
import Photo from './Photo'


const PhotoInfo = props => {
  if (props.photoInfo){
    const renderPhoto = (<Photo key={1} mediaType={props.photoInfo.media_type} title={props.photoInfo.title} url={props.photoInfo.url} explanation={props.photoInfo.explanation}/>)

    return (
      <div>
        {renderPhoto}
      </div>
    )
  }

}

export default PhotoInfo
