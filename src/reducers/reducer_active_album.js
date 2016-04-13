export default function(state = null, action) {
  switch (action.type) {
    case 'ALBUM_SELECTED':
      console.log(action);
      return action.payload;
  }

  return state;
}
