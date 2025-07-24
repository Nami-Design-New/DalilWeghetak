import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

import "swiper/css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/all.min.css";
import "./assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </QueryClientProvider>
);
