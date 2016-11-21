export function changeRoute(name) {
  return (dispatch) => {
    dispatch({ type: 'CHANGE_ROUTE', route: name });
  };
}

export function showFoods() {
  const request = fetch('http://localhost:3000/api/foods', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
  .then((response) => response.json()
  .catch(() => {
    dispatch({ type: 'SHOW_FOODS', payload: [] });
  }));

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'SHOW_FOODS', payload: response.body });
    });
  };
}
