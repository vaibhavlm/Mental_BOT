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

export const ResetName = ()=>({
    type : ActionTypes.RESET_NAME
})

export const ResetChallenges = ()=>({
    type : ActionTypes.RESET_CHALLENGES
})