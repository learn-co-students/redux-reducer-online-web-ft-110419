export function manageFriends(state, action){
    switch( action.type ) {
      case "ADD_FRIEND": 
        return {friends: [...state.friends, action.friend] }
      case "REMOVE_FRIEND" :
        let friendsArray = [] 
        state.friends.map( friend => {
          if ( friend.id != action.id ) {
            friendsArray.push(friend)
          }
        })
        return {friends: friendsArray}
      default: 
        return {friends: state.friends}
    }
  }