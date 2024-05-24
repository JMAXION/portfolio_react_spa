import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Skills, Work, Testimonial } from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /* loader: rootLoader, */
    children: [
      {
        path: "/" /*  / 의 경우 root context라고 부른다. */,
        element: <Home />,
        /* loader: teamLoader, */
      },
      {
        path: "/about",
        element: <About />,
        /* loader: teamLoader, */
      },
      {
        path: "/skills",
        element: <Skills />,
        /* loader: teamLoader, */
      },
      {
        path: "/work",
        element: <Work />,
        /* loader: teamLoader, */
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
        /* loader: teamLoader, */
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
