export function fetchPhoto(date) {

  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(`http://localhost:3001/pictures/${date}`,{
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}


export function fetchTodaysPhoto() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TODAYS_PHOTO'});
    fetch(`http://localhost:3001`,{
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}


export function fetchMarsPhotos(){
  return (dispatch) => {
    dispatch({type: 'FETCH_MARS_PHOTOS'});
    fetch(`http://localhost:3001/mars`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_MARS_PHOTO_TO_STATE', data: data}))

  }
}
