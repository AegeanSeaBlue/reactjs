import {ADD,SUB} from '../../actions'

export default function counter(state = { value : 0}, action) {
    switch (action.type) {
        case ADD:
            return {value : state.value + action.num}
        case SUB:
            return {value : state.value - action.num}
        default:
            return state
    }
}