import * as ActionTypes from './ActionType';

export const Toggle = (problem)=>({
    type : ActionTypes.TOGGLE_SELECT,
    payload: problem
})


export const changeName = (name)=>({
    type:ActionTypes.CHANGE_USERNAME,
    payload: name
})

export const changeBotName = (name)=>({
    type : ActionTypes.CHANGE_BOTNAME,
    payload : name
})