export function fetchPhoto(date) {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&hd=false&api_key=[insert key]`

  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(url)
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}
