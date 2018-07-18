import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from "redux-thunk";
import DevTools from "../components/DevTools";

export default function configureStore(initialState){
    return createStore(rootReducer,
         initialState,
         compose(
            applyMiddleware(reduxImmutableStateInvariant(), thunk),
            DevTools.instrument()
         )
    );
}

export function loadCourses() {

}