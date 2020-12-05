import {PROBLEMS} from '../shared/Problems';
import * as ActionType from './ActionType';


export const Problems = (state = PROBLEMS, action)=>{
  switch(action.type){
      case ActionType.TOGGLE_SELECT :
          const problem = action.payload;
          problem.selected = !problem.selected;
          return Object.assign([],state,{[problem.id]:problem});

          default: return state;
  }

}