import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import MyStory from './pages/MyStory';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: null,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: null,
      },
      {
        path: "my-story",
        element: <MyStory />,
        loader: null,
      },
      {
        path: "contact",
        element: <Contact />,
        loader: null,
      },
      {
        path: "experience",
        element: <Experience />,
        loader: null,
      },
      {
        path: "projects",
        element: <Projects />,
        loader: null,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
