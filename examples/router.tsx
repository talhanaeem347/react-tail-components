import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import React from "react";
import App from "./App";

interface RouterLinkinterface {
    path: string;
    label: string; 
    element: React.ReactNode;
  }

const routerLinks:RouterLinkinterface[] = [
]



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: routerLinks.map((_link) => {
        return { path: _link.path, element: _link.element };
      }),
    },
  ]);
  
  export { routerLinks };
  export default router;