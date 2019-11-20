import { useEffect, useReducer } from "react";

const useLocalStorageReducer = function (key, initialVal, reducer) {
  // make piece of state based off of value in localStorage, or initialVal
  const [state, dispatch] = useReducer(reducer, initialVal,
    () => {
      let val;
      try {
        val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
      } catch (e) {
        val = initialVal;
      }
      return val;
    }
  );


  // use useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;