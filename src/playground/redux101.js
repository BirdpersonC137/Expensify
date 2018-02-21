import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type: 'RESET'
})
const setCount = ({count}) => ({
    type: 'SET',
    count
})

//Reducers

// 1. Reducers are pure functions - output determined by the input
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
    console.log('running');
    return state;
}
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
//i'd like to increment count
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())
// unsubscribe(); 
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(resetCount())
store.dispatch(setCount({count: 5}))
store.dispatch(incrementCount({incrementBy: 100}))
store.dispatch(resetCount())
