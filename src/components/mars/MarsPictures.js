import React from 'react'
import MarsPicture from './MarsPicture'

const MarsPictures = (props) =>{
  const pictures = props.pictures.photos
  console.log(pictures)

  return (
    <div>
      {pictures.map((photo) => {
        return  <MarsPicture key={photo.id} image={photo.img_src} />
        })
      }
    </div>
  )

}

export default MarsPictures
