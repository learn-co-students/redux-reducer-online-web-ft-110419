export function managePresents(prevState = { numberOfPresents: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      return Object.assign({}, prevState, {
        numberOfPresents: prevState.numberOfPresents + 1
      });
      break;

    default:
      return prevState;
      break;
  }
}
