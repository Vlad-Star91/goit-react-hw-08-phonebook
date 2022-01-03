const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getIsCurrentUser = (state) => state.auth.usFetchingCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsCurrentUser,
};

export default authSelectors;