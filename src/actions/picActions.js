export function fetchPhoto() {
  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(`https://api.nasa.gov/planetary/apod?&hd=false&api_key=[insert key]`)
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}
