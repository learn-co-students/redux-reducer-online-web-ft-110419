export function manageFriends(state, action){
    switch (action.type) {
		case 'ADD_FRIEND':
			let newFriends = state.friends.slice()
			newFriends.push(action.friend)
			return {friends: newFriends}
		case 'REMOVE_FRIEND':
			let index = state.friends.findIndex(friend => friend.id === action.id)
			return {friends: state.friends.slice(0, index).concat(state.friends.slice(index + 1))}
		default:
			return state
	}
}

