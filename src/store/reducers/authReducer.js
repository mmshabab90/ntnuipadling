const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      // console.log("Login Failed!");
      return {
        ...state,
        authError: "Login Failed! Wrong Email or Password.",
      };
    case "LOGIN_SUCCESS":
      // console.log("Login success...");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      // console.log("Signed out successfully");
      return state;
    default:
      return state;
  }
};

export default authReducer;
