export function manageFriends(prevState, action){
    switch(action.type){
        case 'ADD_FRIEND' :
            
        return (Object.assign({},prevState,{friends: [...prevState.friends,action.friend]}))
        
        case 'REMOVE_FRIEND':
        return Object.assign({}, prevState, {
            friends: prevState.friends.filter(friend => friend.id !== action.id)
          });
        default:
            return prevState
        }
        
    
}

// (Object.assign({},prevState, {friends: [ ...prevState.friends.slice(0,index),prevState.friends.slice(index+1)]}))