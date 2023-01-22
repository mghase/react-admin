import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/Login";
import QueryWrapper from "./components/QueryWrapper";
import AuthProvider from "./providers/AuthProvider";
import ToastProvider from "./providers/ToastProvider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      suspense: true
    }
  }
});

export default function App() {
  return (
    <ToastProvider>
      <QueryWrapper>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router>
              <Switch>
                <Route path="/admin">
                  <AdminLayout />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Redirect to="/admin" />
                </Route>
              </Switch>
            </Router>
          </AuthProvider>
        </QueryClientProvider>
      </QueryWrapper>
    </ToastProvider>
  );
}
