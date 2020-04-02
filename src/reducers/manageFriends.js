export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            /* let prevFriends = state.friends
            // prevFriends.push(action.friend)
            // return {friends: prevFriends}
            // the above ^^ affected original state.

            The correct way to do this is: */
            return {...state, friends: [...state.friends, action.friend]}
            // ...state is the first argument, which carries over everything
            // friends is the second argument with a key of [...state.friends, action.friend]
            // this updates the new state without mutating the original state. 

        case 'REMOVE_FRIEND':
            // let findFriend = state.friends.filter(friend => friend.id !== action.id) - This should have been okay to use since
            // filter gives a brand new array.
            let index = state.friends.findIndex(friend => friend.id === action.id)
            /*The findIndex() method returns the index of the first element in the array
             that satisfies the provided testing function. Otherwise, it returns -1, 
             indicating that no element passed the test*/
            return {...state, friends: [
                ...state.friends.slice(0, index),
                ...state.friends.slice(index + 1)
            ]}
        default:
            return state;
    }
}

/*
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
 
let olderDog = {...dog, age: dog.age + 1}

This would translate to the same English, "Return a new object that contains all the key-value pairs 
from dog copied over with the age key overwritten with a new value".

*/