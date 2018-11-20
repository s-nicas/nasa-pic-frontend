export default function picsReducer(state = {
    isFetchingPhoto: true,
    pictures: []
  }, action) {
    switch (action.type) {
      case 'FETCH_PHOTO':
        return {...state, isFetchingPhoto: true, pictures: []}
       case 'ADD_PHOTO_TO_STATE':
        return 'hi'

       default:
        return state;
    }
  }
