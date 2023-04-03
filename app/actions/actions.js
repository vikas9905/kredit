import axios from 'axios';
import {Environment} from '../../environment';
import {SUCCESS,FAILED,LOADING,RESULT_CHECK_LOADING,RESULT_SUCCESS,RESULT_FAILED,QUIZ_FAILED,QUIZ_SUCCESS,QUIZ_LOADING} from './actionTypes';

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

export const getQuizs = (user_id) => {
    return async (dispatch) =>{
        try {
            dispatch({type:QUIZ_LOADING})
            const resp = await axios.post(base_url+'/quiz/',{'user_id':user_id})
            // console.log(resp.data)
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