import { TestActions, ADD_NUMBER, DELETE_NUMBER } from './test.action';

 
const initialState: number[] = [];
 
export function test_reducer(
    state: number[] = initialState,
    action: TestActions) {
 
    switch (action.type) {
        case ADD_NUMBER:
            return [...state, action.payload];
 
        case DELETE_NUMBER:
            return state.splice(action.index,1);
 
        default:
            return state;
    }
}