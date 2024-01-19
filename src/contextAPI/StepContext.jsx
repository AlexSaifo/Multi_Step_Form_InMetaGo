import { createContext, useReducer } from "react";

const initialState = {
  current: 1,
  isCompleted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        current: state.current + 1,
      };
    case "BACK_STEP":
      return {
        ...state,
        current: state.current - 1,
      };
    case "GO_TO":
      return {
        ...state,
        current: action.payload.to,
      };
    case "DONE":
      return {
        ...state,
        isCompleted: true,
      };
    default:
      return state;
  }
}

const StepContext = createContext();

function StepProvider(props) {
  const [step, dispatchStep] = useReducer(reducer, initialState);

  return (
    <StepContext.Provider value={{ step, dispatchStep }}>
      {props.children}
    </StepContext.Provider>
  );
}

export { StepContext, StepProvider };
