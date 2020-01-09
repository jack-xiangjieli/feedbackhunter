import axios from 'axios';

import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
    // we have added redux-thunk in the middleware, so when we call the fetchUser action creation function
    // and the redux-thunk sees taht we return a function, it will automatically call it with dispatch
    const res = await axios.get('/api/current_user');   // res is a XML object 
    dispatch({ type: FETCH_USER, payload: res.data });
};


export const handleToken = (token) => async dispatch => {
    const res = await axios.post('api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data }) ;
};


export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type:FETCH_SURVEYS, payload: res.data });
};
