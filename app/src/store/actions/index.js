import axios from 'axios'

export const START_FETCHING = 'START-FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_START = 'ADD_START'

export const fetchCharacter = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
    .get('https://rickandmortyapi.com/api/character')
    
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.results }))
    
    .catch(err => console.log('errorz', err))
}

export const fetchEpisode = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
    .get('https://rickandmortyapi.com/api/episode')

    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.results}))

    .catch(err => console.log('errorz', err))
}
export const fetchLocation = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get("https://rickandmortyapi.com/api/location")

    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.results}))
    
    .catch(err => console.log('errorz', err))
}
// export const fetchResident = () => dispatch => {
//     dispatch({ type: START_FETCHING })
//     axios.get("https://rickandmortyapi.com/api/location")

//     .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.results.residents}))
    
//     .catch(err => console.log('errorz', err))
// }

