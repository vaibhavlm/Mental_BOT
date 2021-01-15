import {PROBLEMS} from '../shared/Problems';
import * as ActionType from './ActionType';


export const Problems = (state = PROBLEMS, action)=>{
  switch(action.type){
      case ActionType.TOGGLE_SELECT :
          const problem = action.payload;
          problem.selected = !problem.selected;
          return Object.assign([],state,{[problem.id]:problem});
      case ActionType.RESET_CHALLENGES:  state.map(problem=> {
        problem.selected == true ? problem.selected=!problem.selected : problem.selected=problem.selected
      })
      return state;
          default: return state;
  }

}