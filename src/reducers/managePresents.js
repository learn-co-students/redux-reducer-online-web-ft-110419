export function managePresents(state, action){
    switch(action.type){
        case "INCREASE":
            return {numberOfPresents: state.numberOfPresents + 1}
        case "DECREASE":
            return {numberOfPresents: state.managePresents - 1}
        default:
                return state
    }
}
