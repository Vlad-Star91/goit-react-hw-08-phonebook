const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getIsCurrentUser = (state) => state.auth.usFetchingCurrentUser;
const authToken = (state) => state.auth.token;
const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsCurrentUser,
  authToken,
};

export default authSelectors;
