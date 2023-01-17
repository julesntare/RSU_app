import React, { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("rsuToken", accessToken);
  } else {
    localStorage.removeItem("rsuToken");
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case "LOGIN": {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    await fetch(`${process.env.REACT_APP_RSU_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setSession(data.token);
          dispatch({
            type: "LOGIN",
            payload: {
              isAuthenticated: true,
              user: data.data,
            },
          });
          return;
        }
        dispatch({
          type: "LOGIN",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      })
      .catch((err) => {
        return err;
      });
    return state;
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    try {
      const accessToken = window.localStorage.getItem("rsuToken");
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        const { user } = jwtDecode(accessToken);
        fetch(`${process.env.REACT_APP_RSU_API_URL}/users/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "INIT",
              payload: {
                isAuthenticated: true,
                user: data,
              },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: "INIT",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
