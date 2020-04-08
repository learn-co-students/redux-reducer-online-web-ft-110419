export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            let newFriend = {...state, 
                friends: [...state.friends, action.friend]}
            return newFriend
        case "REMOVE_FRIEND":
            let removeFriend = state.friends.find(friend => friend.id == action.id)

            return {...state,
                friends: state.friends.filter(element => element !== removeFriend)}
            
        default:
            return state;
    }
}
