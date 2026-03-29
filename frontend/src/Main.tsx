import FirstPage from "./pages/FirstPage";
import Question from "./pages/Question";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Topics from "./pages/Topics";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import { createBrowserRouter, RouterProvider, Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/loader/Loader";
import "./Main.css";
import ModalError from "./components/modal-error/ModalError";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          {isLoading && <Loader />}
          <Outlet />
          <ModalError />
        </main>
        <Footer />
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <FirstPage /> },
      { path: "/topics", element: <Topics /> },
      { path: "/question", element: <Question /> },
      { path: "/authorization", element: <Authorization /> },
      { path: "/registration", element: <Registration /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
