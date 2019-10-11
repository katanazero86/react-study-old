import { combineReducers } from 'redux';
import counter from './test/testStore.js';

// combineReducers 를 이용하여, 리듀서들 합치기!

export default combineReducers({
    counter,
});