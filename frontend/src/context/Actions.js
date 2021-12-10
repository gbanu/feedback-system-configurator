export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFail = () => ({
  type: "LOGIN_FAIL",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const RegisterSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});

export const RegisterFail = () => ({
  type: "REGISTER_FAIL",
});
