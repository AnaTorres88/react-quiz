import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./auth/authContext";
import RootLayout from './RootLayout';
import Error from './Error';
import QuizRenderer from "./QuizRenderer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
// Version intuitiva
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "/", element: <Login /> }, // path: ""
      { path: "/signup", element: <Signup/>},
      { path: "/quiz", element: <QuizRenderer /> },
    ],
  },
]);

function App() {
  return (
  <AuthProvider>
    <RouterProvider router={router} />;
  </AuthProvider>
  )
}

export default App;
