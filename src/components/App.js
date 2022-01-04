import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import AppBar from "./AppBar/AppBar.jsx";
import { authOperations, authSelectors } from "../redux/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivatRoute";
import Container from "./Container/Container.jsx";

const HomeView = lazy(() => import("../views/HomeView.js"));
const ContactsView = lazy(() => import("../views/ContactsView"));
const RegisterView = lazy(() =>
  import("../views/RegisterView/RegisterView.jsx")
);
const LoginView = lazy(() => import("../views/LoginView/LoginView.jsx"));

export default function App() {
  const token = useSelector(authSelectors.authToken);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsCurrentUser);
  useEffect(() => {
    dispatch(
      authOperations.fetchCurrentUser(null, {
        skip: !token,
      })
    );
  });

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <h1 style={{ textAlign: "center", marginTop: 20 }}>Loading...</h1>
          }
        >
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
