import Home from './pages/Home';
import Dashboard from './pages/Dashboard.jsx';
import Onboarding from './pages/Onboarding';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const AuthToken = cookies.AuthToken;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          <Route
            path="/dashboard"
            element={AuthToken ? <Dashboard /> : <Home />}
          />
        }
        {<Route path="/onboarding" element={<Onboarding />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
