import {getTemp} from '../api/getTemp';

export function fetch_start() {
  return {type: 'START_FETCH'};
}

export function fetch_success(cityName, temp) {
  console.log(temp);

  return {type: 'FETCH_SUCCESS', cityName, temp};
}

export function fetch_errort() {
  return {type: 'FETCH_ERROR'};
}

export function fetchDataThunk(cityName) {
  return dispatch => {
    dispatch(fetch_start());
    getTemp(cityName)
      .then(temp => dispatch(fetch_success(cityName, temp)))
      .catch(() => dispatch(fetch_errort()));
  };
}
