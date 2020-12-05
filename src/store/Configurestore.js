import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Problems} from './problems';
import { Name } from './name';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import { initialFormfeedback } from './forms';


export const Configurestore = ()=>{
  const store = createStore(
    combineReducers({
        problems: Problems,
        name: Name,
        ...createForms({
          choosename:initialFormfeedback
        })
    }),
    applyMiddleware(thunk)
  );
  return store;
}