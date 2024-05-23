import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
      { index: true, element: <Signup /> }, // path: ""
      { path: "/quiz", element: <QuizRenderer /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
