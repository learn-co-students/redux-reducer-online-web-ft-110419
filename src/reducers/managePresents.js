export function managePresents(state = {
    numberOfPresents: 0,
}, action){
    switch (action.type) {
        case 'INCREASE':
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            })
            
        default:
            return state;
    }
};

// write a function called managePresents() 
// that takes in the previous state and an action as its argument
// set a default value for the state argument - an object with a key, numberOfPresents, assigned to 0.