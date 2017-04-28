export default function reducer(state = [], action) {
  switch (action.type) {
    case "TEST":
      return action.payload;
    default:
      return state;
  }
}
