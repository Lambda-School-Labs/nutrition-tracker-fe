import axiosWithAuth from './axiosWithAuth';

export const START_INSERT_WEIGHT = "START_INSERT_WEIGHT";
export const INSERT_WEIGHT_SUCCESS  = "INSERT_WEIGHT_SUCCESS";
export const INSERT_WEIGHT_FAILURE = "INSERT_WEIGHT_FAILURE";



export const recordUserWeight = record => dispatch =>  {
    dispatch({ type: START_INSERT_WEIGHT });
        return axios
            .post(`http://localhost:5000/user/record-weight`, record )
            .then( res => dispatch({ type: INSERT_WEIGHT_SUCCESS, payload:res.data}))
            .catch( error => dispatch({ type:INSERT_WEIGHT_FAILURE, payload: {error} }));
            
};

 