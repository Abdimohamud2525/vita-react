const CounterReduser = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return { counter: state.counter - 1 };
    default:
      throw new Error("unknown action type ");
  }
};
export default CounterReduser;
