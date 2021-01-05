import {NAME} from '../shared/Name';
import * as ActionTypes from './ActionType';

export const Name = (state = NAME,action)=>{
    switch(action.type){
        case ActionTypes.CHANGE_USERNAME:
            var name = action.payload;
            return {...state , username:name};
        case ActionTypes.CHANGE_BOTNAME:
            return {...state, botname:action.payload};
         case ActionTypes.RESET_NAME:
             return {...state, username:NAME.username, botname:NAME.botname};   
         default: return state;
    }
}
