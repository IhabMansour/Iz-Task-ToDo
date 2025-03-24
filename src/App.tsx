import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import HuntGhosts from './Pages/HuntGhosts';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import { ThemeProvider } from './Contexts/ThemeProvider';
import TodoPage from './Pages/ToDo';
import { LanguageProvider } from './Contexts/LanguageProvider';
import './Utils/i18n';
import { Layout } from 'antd';
import Home from './Pages/Home';
import './App.css';
import HeaderComponent from './Layout/Header';
import FooterComponent from './Layout/Footer';
import { MAIN_LINKS } from './Constants/Links';
import { TaskProvider } from './Contexts/TaskContext';

const ProtectedRoute = ({ children }: any) => {
  const { token } = useAuth();
  return token ? children : <Navigate to={MAIN_LINKS.SIGN_IN} />;
};

const LayoutWrapper = ({ children }: any) => {
  const location = useLocation();

  // Check if the current route is either the SignIn or SignUp page
  const isAuthPage =
    location.pathname === MAIN_LINKS.SIGN_IN ||
    location.pathname === MAIN_LINKS.SIGN_UP;

  return (
    <Layout>
      {!isAuthPage && (
        <Layout.Header style={{ background: 'transparent' }}>
          <HeaderComponent />
        </Layout.Header>
      )}
      <Layout.Content>{children}</Layout.Content>
      {!isAuthPage && (
        <Layout.Footer>
          <FooterComponent />
        </Layout.Footer>
      )}
    </Layout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <TaskProvider>
            <Router>
              <LayoutWrapper>
                <Routes>
                  <Route path={MAIN_LINKS.HOME} element={<Home />} />
                  <Route path={MAIN_LINKS.SIGN_IN} element={<SignIn />} />
                  <Route path={MAIN_LINKS.SIGN_UP} element={<SignUp />} />
                  <Route
                    path={MAIN_LINKS.TODO}
                    element={
                      <ProtectedRoute>
                        <TodoPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path={MAIN_LINKS.SETTINGS}
                    element={
                      <ProtectedRoute>
                        <Settings />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path={MAIN_LINKS.GHOST_HUNT}
                    element={<HuntGhosts />}
                  />
                  <Route
                    path="*"
                    element={<Navigate to={MAIN_LINKS.SIGN_IN} />}
                  />
                </Routes>
              </LayoutWrapper>
            </Router>
          </TaskProvider>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
