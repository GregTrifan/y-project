import Layout from './components/layout'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/home'
import Dashboard from './pages/dashboard';

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dash" element={<Dashboard/>} />
          <Route path="/callback" element={<Navigate replace to="/dash" />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
