import React, { useEffect, useState } from "react";

const useLocalStorageState = function (key, initialVal) {
  // make piece of state based off of value in localStorage, or initialVal
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  })

  // use useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;