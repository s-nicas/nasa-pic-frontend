export default function rootsReducer(state = {
    isFetchingPhoto: false,
    pictures: [],
    userRequestInProgress: false
    // ,
    // picture: {}
  }, action) {
    switch (action.type) {
      case 'FETCH_PHOTO':
        return {...state, isFetchingPhoto: true, pictures: []}
       case 'ADD_PHOTO_TO_STATE':
        return {isFetchingPhoto: false, pictures: action.data}
       case 'FETCH_MARS_PHOTOS':
        return {isFetchingPhoto: true, pictures: []}
       case 'ADD_MARS_PHOTO_TO_STATE':
        return {isFetchingPhoto: false, pictures: action.data}
        case 'BEGIN_USER_REQUEST':
         return {...state, userRequestInProgress: true}
       default:
        return state;
    }
  }
