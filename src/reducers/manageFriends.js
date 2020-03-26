export function manageFriends(prevState = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, prevState, {
        friends: [...prevState.friends, action.friend]
      });
      break;

    case "REMOVE_FRIEND":
      return Object.assign({}, prevState, {
        friends: prevState.friends.filter(friend => friend.id !== action.id)
      });
      break;

    default:
      return prevState;
      break;
  }
}
