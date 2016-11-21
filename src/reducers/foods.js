function foods(state = [], action) {
  switch (action.type) {
  case 'SHOW_POSTS' :
    return action.payload;
  default:
    return state;
  }
}
export default foods;
