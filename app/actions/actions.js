import axios from 'axios';
import {Environment} from '../../environment';
import {SUCCESS,FAILED,LOADING,RESULT_CHECK_LOADING,RESULT_SUCCESS,RESULT_FAILED,QUIZ_FAILED,QUIZ_SUCCESS,QUIZ_LOADING,USER_SIGNIN_FAILED,USER_SIGNIN_LOADING,USER_SIGNIN_SUCCESS,
USER_DETAILS_FAILED,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS,USER_HISTORY_FAILED,USER_HISTORY_LOADING,USER_HISTORY_SUCCESS,
USER_LEADERBOARD_FAILED,USER_LEADERBOARD_SUCCESS,USER_LEADERBOARD_LOADING,USER_ORDER_LOADING,USER_ORDER_SUCCESS,USER_ORDER_FAILED} from './actionTypes';
import signInWithGoogle from '../firebase/firebase';
import {AsyncStorage} from 'react-native';
const base_url =Environment.BASE_URL;

export const getQuestion = (ques_id) =>{
    return async (dispatch) =>{
        try {
            dispatch({type:LOADING})
            // console.log("QUESTION_id",ques_id)
            data={
                secret_key: 'any',
                user_id: 'kajhs'
            }
            const resp = await axios.get(base_url +'/quiz/'+ques_id)
        
            if(resp.status ==200) {
                return dispatch({type:SUCCESS,payload:resp.data})
            }else {
                return dispatch({type:FAILED,payload:[]})
            }
        } catch (error) {
            console.log(error)
            return dispatch({type:FAILED,payload:[]})
        }
    }
}

export const ValidateAnswers = (answers) =>{
    return async (dispatch) =>{
        try {
            dispatch({
                type: RESULT_CHECK_LOADING,
            })
            data = []
            for(const [key,val] of answers) {
                data.push({
                    qid: key,
                    ans: val
                })
            }
            const resp = await axios.post(base_url+"/result/",{answer:data});
            if(resp.status == 200) {
                // console.log(resp.data)
                return dispatch({
                    type: RESULT_SUCCESS,
                    payload: resp.data
                })
            }else{
                return dispatch ({
                    type: RESULT_FAILED,
                    payload: []
                })
            }
        }catch(e) {
            console.log(e)
            return dispatch ({
                type: RESULT_FAILED,
                payload: []
            })
        }
    }
}

export const getQuizs = (user_id,quiz_type) => {
    return async (dispatch) =>{
        try {
            dispatch({type:QUIZ_LOADING})
            const resp = await axios.post(base_url+'/quiz/',{'user_id':user_id,'quiz_type':quiz_type})
            console.log(resp)
            if(resp.status == 200) {
                return dispatch({
                    type: QUIZ_SUCCESS,
                    payload: resp.data
                })
            }else {
                return dispatch({
                    type: QUIZ_FAILED,
                    payload: []
                })
            }
        }catch(e) {
            console.log(e)
            return dispatch({
                type: QUIZ_FAILED,
                payload: []
            })
        }
    }
}

export const googleSignIn = () =>{
    return async (dispatch) => {
        dispatch({type:USER_SIGNIN_LOADING})
        signInWithGoogle.then((result)=>{
            console.log(result)
        }).catch((err)=>{
            console.log(error)
        })
    }
}

export const getUserDetails = (user_id) =>{
    return async(dispatch) =>{
        console.log("getting user Details",`${base_url}/user/${user_id}/`)
        dispatch({type:USER_DETAILS_LOADING});
        try{
            let resp = await axios.get(`${base_url}/user/${user_id}/`);
            console.log(resp)
            if(resp.status == 200) {
                return dispatch({type:USER_DETAILS_SUCCESS,payload:resp.data});
            }else{
                console.log("getting user Details Failed")
                return dispatch({type:USER_DETAILS_FAILED});
            }
        }catch(e) {
            console.log(e)
        }finally{
            
        }
    }
}
export const getUserCreditDebitHistory = (user_id) =>{
    return async(dispatch) =>{
        dispatch({type:USER_HISTORY_LOADING});
        try{
            let resp = await axios.get(`/user/${user_id}}/history/`);
            if(resp.status == 200) {
                return dispatch({type:USER_HISTORY_SUCCESS,payload:resp.data});
            }else{
                return dispatch({type:USER_HISTORY_FAILED});
            }
        }catch(e) {

        }finally{
            
        }
    }
}
export const getLeaderboard = () =>{
    return async(dispatch) =>{
        dispatch({type:USER_HISTORY_LOADING});
        try{
            let resp = await axios.get(`/leaderboard/`);
            if(resp.status == 200) {
                return dispatch({type:USER_HISTORY_SUCCESS,payload:resp.data});
            }else{
                return dispatch({type:USER_HISTORY_FAILED});
            }
        }catch(e) {

        }finally{
            
        }
    }
}
export const order = (data) =>{
    return async(dispatch) =>{
        dispatch({type:USER_ORDER_LOADING});
        try{
            let resp = await axios.post(`/order/`,data);
            if(resp.status == 200) {
                return dispatch({type:USER_ORDER_SUCCESS,payload:resp.data});
            }else{
                return dispatch({type:USER_ORDER_FAILED});
            }
        }catch(e) {

        }finally{
            
        }
    }
}

export const getDataFromLocalStorage = (key,actionTypeSuccess,actionTypeFail) =>{
    return async (dispatch) =>{
        try {
            const value = await AsyncStorage.getItem(key);
            console.log(value)
            if (value !== null) {
              dispatch({type:actionTypeSuccess,payload:JSON.parse(value)})
            }
          } catch (error) {
            console.log(error)
            dispatch({type:actionTypeFail})
          }
    }
}