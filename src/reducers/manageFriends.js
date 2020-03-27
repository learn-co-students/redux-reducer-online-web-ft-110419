export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let friends = state.friends.filter(fr => fr.id !== action.id)
            return {friends: friends}
        default:
          return state;
    }
}
