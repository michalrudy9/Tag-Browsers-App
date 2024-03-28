import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import TagDetailPage from "./pages/TagDetailPage";
import store from "./store/store";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: ":tagName", element: <TagDetailPage /> },
  ]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
