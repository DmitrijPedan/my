import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CookieConsent from "src/components/CookieConsent";
import AppProvider from "src/context/AppProvider";
import { router } from "src/router/AppRouter";

import "./index.css";
import "./styles/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={router} />
    <CookieConsent />
  </AppProvider>
);
