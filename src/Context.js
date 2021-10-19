import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const values = {
    count,
    suma() {
      setCount((val) => val + 1);
    },
    resta() {
      setCount((val) => val - 1);
    },
    user: {
      status: "Online",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJzdGF0dXMiOiJvbmxpbmUifQ.ndsqj1chCCgt-EBeuiFZGd8W9_wYn0RCMkHziKZY3LQ",
      theme: "light",
    },
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};
